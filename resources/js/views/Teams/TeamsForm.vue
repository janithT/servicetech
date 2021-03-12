<template>
  <div>
    <title-bar :title-stack="titleStack"/>
 
    <section class="section is-main-section">
      <tiles>
        <card-component :title="formCardTitle" icon="account-edit" class="tile is-child">
          <form @submit.prevent="submit">                 
                 
                        <b-field label="Team Name" message="Team name" horizontal >
                        <b-input placeholder="e.g. Saman Kumara" v-model="form.name" required />
                        </b-field>
                        <b-field label="Team Email" message="Team Email" horizontal >
                        <b-input placeholder="e.g. abc@gmail.com" v-model="form.email"  />
                        </b-field>  
                        <b-field label="Team Telephone" message="Team Telephone " horizontal >
                        <b-input type="number" placeholder="e.g. 0123456789" v-model="form.telephone"  />
                        </b-field> 
                        <b-field label="Joined date" message="Team joined date" horizontal >
                        <b-datepicker
                            @input="input"
                            v-model="form.joined_date"
                            placeholder="Click to select...">
                            </b-datepicker>
                        </b-field> 
                        <b-field label="Team routes" message="Team routes" horizontal >
                        <b-input placeholder="e.g. route 53" v-model="form.route"  />
                        </b-field>        

                        <div class="buttons is-centered">
                        <b-field grouped >
                        <b-field horizontal>
                        <b-button type="is-primary" :loading="isLoading" native-type="submit">Submit</b-button>
                        </b-field>
                        <b-field >
                        <router-link :to="{name:'teams.new'}" class="button is-primary">
                          New Team
                        </router-link>
                        </b-field>
                        </b-field>
                        </div>
                               
          </form>
        </card-component>

        
      </tiles>
    </section>

     

  </div>
</template>

<script>
import clone from 'lodash/clone'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import UserAvatar from '@/components/UserAvatar'
import Notification from '@/components/Notification'

import map from 'lodash/map'
import ModalBox from '@/components/ModalBox'
import CardToolbar from '@/components/CardToolbar'
import ModalTrashBox from '@/components/ModalTrashBox'

export default {
  name: 'TeamForm',
  components: { UserAvatar, FilePicker, CardComponent, Tiles, HeroBar, TitleBar, Notification, ModalBox, ModalTrashBox, CardToolbar, },
  props: {
    id: {
      default: null
    }
  },
  data () {
    return {
      isLoading: false,
      item: null,
      form: this.getClearFormObject(),
      createdReadable: null,
      checkedRows: [],

      isModalActive: false,
      trashObject: null,
      paginated: true,
      perPage: 5,
       
    }
  },
  computed: {
    titleStack () {
      let lastCrumb

      if (this.isProfileExists) {
        lastCrumb = this.form.name
      } else {
        lastCrumb = 'New Teams'
      }

      return [
        'Admin',
        'Team',
        lastCrumb
      ]
    },
    formCardTitle () {
      if (this.isProfileExists) {
        return 'Edit Team'
      } else {
        return 'New Team'
      }
    },
    trashSubject () {
      if (this.trashObject) {
        return this.trashObject.Taskname
      }

      if (this.checkedRows.length) {
        return `${this.checkedRows.length} entries`
      }

      return null
    },
    
    isProfileExists () {
      return !!this.item
    },
    
  },
  created () {
    this.getData()
  },
  methods: {
    getClearFormObject () {
      return {
        name: null,
        email: null,
        telephone: null,
        joined_date: null,
        route: null,
        created_date:null
        
      }
    },
    // queuePurchase() {
    //   this.selectedTableSet.push( this.selected );
    //   this.selected='';
    // },
    // queuePurchaseminus() {
    //   //this.selectedTableSet.push( this.selected );
    //   this.selectedTableSet.pop();
      

      
    // },
    getData () {
      if (this.id) {
        axios
          .get(`/teams/${this.id}`)
          .then(r => {
            this.form = r.data.data
            this.item = clone(r.data.data)

            this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy)
            this.form.joined_date = new Date(r.data.data.joined_date)
          })
          .catch(e => {
            this.item = null

            this.$buefy.toast.open({
              message: `Error: ${e.message}`,
              type: 'is-danger',
              queue: false
            })
          })
      }
 
    },
 
    fileIdUpdated (fileId) {
      this.form.file_id = fileId
      this.form.avatar_filename = null
    },
    input (v) {
      //this.createdReadable = moment(v).format('MMM D, Y').toString()
    },

    trashModal (trashObject = null) {
      if (trashObject || this.checkedRows.length) {
        this.trashObject = trashObject
        this.isModalActive = true
      }
    },
    trashConfirm () {
      let url
      let method
      let data = null

      this.isModalActive = false

      if (this.trashObject) {
        method = 'delete'
        url = `/teams/${this.trashObject.id}/destroy`
      } else if (this.checkedRows.length) {
        method = 'post'
        url = '/teams/destroy'
        data = {
          ids: map(this.checkedRows, row => row.id)
        }
      }

      axios({
        method,
        url,
        data
      }).then( r => {
        this.getData()

        this.trashObject = null
        this.checkedRows = []

        this.$buefy.snackbar.open({
          message: `Deleted`,
          queue: false
        })
      }).catch( err => {
        this.$buefy.toast.open({
          message: `Error: ${err.message}`,
          type: 'is-danger',
          queue: false
        })
      })
    },
    trashCancel () {
      this.isModalActive = false
    },
    
    submit () {
      this.isLoading = true
      let method = 'post'
      let url = '/teams/store'

      if (this.id) {
        method = 'put'
        url = `/teams/${this.id}`
      }

      axios({
        method,
        url,
        data: this.form
      }).then(r => {
        this.isLoading = false

        if (!this.id && r.data.data.id) {
          console.log("im here");
          this.$router.push({name: 'teams.edit', params: {id: r.data.data.id}})

          this.$buefy.snackbar.open({
            message: 'Created',
            queue: false
          })
        } else {
          this.item = r.data.data

          this.$buefy.snackbar.open({
            message: 'Updated',
            queue: false
          })
        }
      }).catch(e => {
        this.isLoading = false

        this.$buefy.toast.open({
          message: `Error: ${e.message}`,
          type: 'is-danger',
          queue: false
        })
      })
    }
  },
  watch: {
    id (newValue) {
      this.form = this.getClearFormObject()
      this.item = null

      if (newValue) {
        this.getData()
      }
    }
  }
}
</script>
