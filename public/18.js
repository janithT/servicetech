(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CardToolbar',
  props: {
    isMobile: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notification',
  data: function data() {
    return {
      isDismissed: false
    };
  },
  methods: {
    dismiss: function dismiss() {
      this.isDismissed = true;
      this.$buefy.snackbar.open({
        message: 'Dismissed',
        queue: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewServices/serviceTasks.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewServices/serviceTasks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tiles */ "./resources/js/components/Tiles.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_FilePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilePicker */ "./resources/js/components/FilePicker.vue");
/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UserAvatar */ "./resources/js/components/UserAvatar.vue");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Notification */ "./resources/js/components/Notification.vue");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var _components_ModalTrashBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ModalTrashBox */ "./resources/js/components/ModalTrashBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskForm',
  components: {
    UserAvatar: _components_UserAvatar__WEBPACK_IMPORTED_MODULE_6__["default"],
    FilePicker: _components_FilePicker__WEBPACK_IMPORTED_MODULE_5__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Notification: _components_Notification__WEBPACK_IMPORTED_MODULE_7__["default"],
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_9__["default"],
    ModalTrashBox: _components_ModalTrashBox__WEBPACK_IMPORTED_MODULE_11__["default"],
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    id: {
      "default": null
    }
  },
  data: function data() {
    return {
      isLoading: false,
      item: null,
      form: this.getClearFormObject(),
      createdReadable: null,
      selected: '',
      selectedTableSet: [],
      serviceName: '',
      commissions: [],
      allTasks: [],
      checkedRows: [],
      isModalActive: false,
      trashObject: null,
      technicians: [],
      paginated: true,
      perPage: 5,
      serviceTaskTable: []
    };
  },
  computed: {
    titleStack: function titleStack() {
      var lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.form.name;
      } else {
        lastCrumb = 'New Service Tasks';
      }

      return ['Admin', 'Service', lastCrumb];
    },
    formCardTitle: function formCardTitle() {
      if (this.isProfileExists) {
        return 'Edit Task';
      } else {
        return 'New Task';
      }
    },
    trashSubject: function trashSubject() {
      if (this.trashObject) {
        return this.trashObject.Taskname;
      }

      if (this.checkedRows.length) {
        return "".concat(this.checkedRows.length, " entries");
      }

      return null;
    },
    isProfileExists: function isProfileExists() {
      return !!this.item;
    }
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getClearFormObject: function getClearFormObject() {
      return {
        Taskname: null,
        Tasknote: null,
        //Taskprice: null,
        commission_id: null
      };
    },
    queuePurchase: function queuePurchase() {
      this.selectedTableSet.push(this.selected);
      this.selected = '';
    },
    queuePurchaseminus: function queuePurchaseminus() {
      //this.selectedTableSet.push( this.selected );
      this.selectedTableSet.pop();
    },
    getData: function getData() {
      var _this = this;

      if (this.id) {
        axios.get("/servicetask/".concat(this.id)).then(function (r) {
          _this.form = r.data.data; // this.form.Taskcommission = r.data.comm
          // console.log(this.form.Taskcommission);

          _this.item = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(r.data.data);
          _this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
        })["catch"](function (e) {
          _this.item = null;

          _this.$buefy.toast.open({
            message: "Error: ".concat(e.message),
            type: 'is-danger',
            queue: false
          });
        });
      }

      this.getCommissionsData();
      this.getservicestasks();
    },
    getCommissionsData: function getCommissionsData() {
      var _this2 = this;

      this.isLoading = true;
      axios.get('/commission').then(function (r) {
        _this2.isLoading = false;

        if (r.data && r.data.data) {
          if (r.data.data.length > _this2.perPage) {
            _this2.paginated = true;
          } //this.commissions = r.data.data


          _this2.commissions = r.data.data.filter(function (option) {
            return option.CommissionStatus == 'Active';
          });
        }
      })["catch"](function (err) {
        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    getservicestasks: function getservicestasks() {
      var _this3 = this;

      this.isLoading = true;
      axios.get('/servicetask').then(function (r) {
        _this3.isLoading = false;

        if (r.data && r.data.data) {
          if (r.data.data.length > _this3.perPage) {
            _this3.paginated = true;
          }

          _this3.allTasks = r.data.data; // this.allTasks = r.data.data.filter((option) => {
          //         return  option.CommissionStatus  == 'Active'
          //     })
        }
      })["catch"](function (err) {
        _this3.isLoading = false;

        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    fileIdUpdated: function fileIdUpdated(fileId) {
      this.form.file_id = fileId;
      this.form.avatar_filename = null;
    },
    input: function input(v) {//this.createdReadable = moment(v).format('MMM D, Y').toString()
    },
    trashModal: function trashModal() {
      var trashObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (trashObject || this.checkedRows.length) {
        this.trashObject = trashObject;
        this.isModalActive = true;
      }
    },
    trashConfirm: function trashConfirm() {
      var _this4 = this;

      var url;
      var method;
      var data = null;
      this.isModalActive = false;

      if (this.trashObject) {
        method = 'delete';
        url = "/servicetask/".concat(this.trashObject.id, "/destroy");
      } else if (this.checkedRows.length) {
        method = 'post';
        url = '/servicetask/destroy';
        data = {
          ids: lodash_map__WEBPACK_IMPORTED_MODULE_8___default()(this.checkedRows, function (row) {
            return row.id;
          })
        };
      }

      axios({
        method: method,
        url: url,
        data: data
      }).then(function (r) {
        _this4.getData();

        _this4.trashObject = null;
        _this4.checkedRows = [];

        _this4.$buefy.snackbar.open({
          message: "Deleted",
          queue: false
        });
      })["catch"](function (err) {
        _this4.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    trashCancel: function trashCancel() {
      this.isModalActive = false;
    },
    submit: function submit() {
      var _this5 = this;

      this.isLoading = true;
      var method = 'post';
      var url = '/servicetask/store';

      if (this.id) {
        method = 'patch';
        url = "/servicetask/".concat(this.id);
      }

      axios({
        method: method,
        url: url,
        data: this.form
      }).then(function (r) {
        _this5.isLoading = false;

        if (!_this5.id && r.data.data.id) {
          console.log("im here");

          _this5.$router.push({
            name: 'servicetasks.edit',
            params: {
              id: r.data.data.id
            }
          });

          _this5.$buefy.snackbar.open({
            message: 'Created',
            queue: false
          });
        } else {
          _this5.item = r.data.data;

          _this5.$buefy.snackbar.open({
            message: 'Updated',
            queue: false
          });

          _this5.getservicestasks();
        }
      })["catch"](function (e) {
        _this5.isLoading = false;

        _this5.$buefy.toast.open({
          message: "Error: ".concat(e.message),
          type: 'is-danger',
          queue: false
        });
      });
    }
  },
  watch: {
    id: function id(newValue) {
      this.form = this.getClearFormObject();
      this.item = null;

      if (newValue) {
        this.getData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "notification is-card-toolbar" }, [
    _c("div", { staticClass: "level", class: { "is-mobile": _vm.isMobile } }, [
      _c("div", { staticClass: "level-left" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("left")], 2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("right")], 2)
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isDismissed
    ? _c("div", { staticClass: "notification" }, [
        _c("div", { staticClass: "level" }, [
          _c("div", { staticClass: "level-left" }, [
            _c("div", { staticClass: "level-item" }, [_vm._t("default")], 2)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-right" }, [
            _c(
              "button",
              {
                staticClass: "button is-small is-white",
                attrs: { type: "button" },
                on: { click: _vm.dismiss }
              },
              [_vm._v("Dismiss")]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewServices/serviceTasks.vue?vue&type=template&id=55ceb349&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewServices/serviceTasks.vue?vue&type=template&id=55ceb349& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "section is-main-section" },
      [
        _c(
          "tiles",
          [
            _c(
              "card-component",
              {
                staticClass: "tile is-child",
                attrs: { title: _vm.formCardTitle, icon: "account-edit" }
              },
              [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit($event)
                      }
                    }
                  },
                  [
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Task Name",
                          message: "Task name",
                          horizontal: ""
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { placeholder: "e.g. Service", required: "" },
                          model: {
                            value: _vm.form.Taskname,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "Taskname", $$v)
                            },
                            expression: "form.Taskname"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      {
                        attrs: {
                          label: "Task Note",
                          message: "Task Note",
                          horizontal: ""
                        }
                      },
                      [
                        _c("b-input", {
                          attrs: { placeholder: "e.g. code" },
                          model: {
                            value: _vm.form.Tasknote,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "Tasknote", $$v)
                            },
                            expression: "form.Tasknote"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-field",
                      { attrs: { label: "Commission", horizontal: "" } },
                      [
                        _c(
                          "b-select",
                          {
                            attrs: { placeholder: "Commission" },
                            model: {
                              value: _vm.form.commission_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "commission_id", $$v)
                              },
                              expression: "form.commission_id"
                            }
                          },
                          _vm._l(_vm.commissions, function(option) {
                            return _c(
                              "option",
                              {
                                key: option.id,
                                domProps: { value: option.id }
                              },
                              [
                                _vm._v(
                                  "\n                              " +
                                    _vm._s(option.CommissionName) +
                                    "\n                          "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "buttons is-centered" },
                      [
                        _c(
                          "b-field",
                          { attrs: { grouped: "" } },
                          [
                            _c(
                              "b-field",
                              { attrs: { horizontal: "" } },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "is-primary",
                                      loading: _vm.isLoading,
                                      "native-type": "submit"
                                    }
                                  },
                                  [_vm._v("Submit")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-field",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "button is-primary",
                                    attrs: { to: { name: "serviceTasks.view" } }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        New\n                      "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "section is-main-section" },
      [
        _c(
          "card-component",
          {
            staticClass: "has-table has-mobile-sort-spaced",
            attrs: { title: "Services Types", icon: "account-multiple" }
          },
          [
            _c("card-toolbar", [
              _c(
                "button",
                {
                  staticClass:
                    "button is-danger is-small has-checked-rows-number",
                  attrs: {
                    slot: "right",
                    type: "button",
                    disabled: !_vm.checkedRows.length
                  },
                  on: {
                    click: function($event) {
                      return _vm.trashModal(null)
                    }
                  },
                  slot: "right"
                },
                [
                  _c("b-icon", {
                    attrs: { icon: "trash-can", "custom-size": "default" }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Delete")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !!_vm.checkedRows.length,
                          expression: "!!checkedRows.length"
                        }
                      ]
                    },
                    [_vm._v("(" + _vm._s(_vm.checkedRows.length) + ")")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("modal-trash-box", {
              attrs: {
                "is-active": _vm.isModalActive,
                "trash-subject": _vm.trashSubject
              },
              on: { confirm: _vm.trashConfirm, cancel: _vm.trashCancel }
            }),
            _vm._v(" "),
            _c(
              "b-table",
              {
                attrs: {
                  "checked-rows": _vm.checkedRows,
                  checkable: true,
                  loading: _vm.isLoading,
                  paginated: _vm.paginated,
                  "per-page": _vm.perPage,
                  striped: true,
                  hoverable: true,
                  "default-sort": "Taskname",
                  data: _vm.allTasks
                },
                on: {
                  "update:checkedRows": function($event) {
                    _vm.checkedRows = $event
                  },
                  "update:checked-rows": function($event) {
                    _vm.checkedRows = $event
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c("b-table-column", {
                          staticClass: "has-no-head-mobile is-image-cell"
                        }),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Task Name",
                              field: "Taskname",
                              sortable: "",
                              searchable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.row.Taskname) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Task Note",
                              field: "Tasknote",
                              sortable: "",
                              searchable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(props.row.Tasknote) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-table-column", { attrs: { label: "Created" } }, [
                          _c(
                            "small",
                            {
                              staticClass: "has-text-grey is-abbr-like",
                              attrs: { title: props.row.created }
                            },
                            [_vm._v(_vm._s(props.row.created))]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            staticClass: "is-actions-cell",
                            attrs: { "custom-key": "actions" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "buttons is-right" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "button is-small is-primary",
                                    attrs: {
                                      to: {
                                        name: "servicetasks.edit",
                                        params: { id: props.row.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "account-edit",
                                        size: "is-small"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "button is-small is-danger",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.trashModal(props.row)
                                      }
                                    }
                                  },
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "trash-can",
                                        size: "is-small"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              },
              [
                _vm._v(" "),
                _c(
                  "section",
                  {
                    staticClass: "section",
                    attrs: { slot: "empty" },
                    slot: "empty"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "content has-text-grey has-text-centered"
                      },
                      [
                        _vm.isLoading
                          ? [
                              _c(
                                "p",
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "dots-horizontal",
                                      size: "is-large"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v("Fetching data...")])
                            ]
                          : [
                              _c(
                                "p",
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "emoticon-sad",
                                      size: "is-large"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v("Nothing's here…")])
                            ]
                      ],
                      2
                    )
                  ]
                )
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CardToolbar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony import */ var _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Notification.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Notification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=6a4ce154& */ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=6a4ce154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/NewServices/serviceTasks.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/NewServices/serviceTasks.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serviceTasks_vue_vue_type_template_id_55ceb349___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serviceTasks.vue?vue&type=template&id=55ceb349& */ "./resources/js/views/NewServices/serviceTasks.vue?vue&type=template&id=55ceb349&");
/* harmony import */ var _serviceTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceTasks.vue?vue&type=script&lang=js& */ "./resources/js/views/NewServices/serviceTasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _serviceTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _serviceTasks_vue_vue_type_template_id_55ceb349___WEBPACK_IMPORTED_MODULE_0__["render"],
  _serviceTasks_vue_vue_type_template_id_55ceb349___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NewServices/serviceTasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/NewServices/serviceTasks.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/NewServices/serviceTasks.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_serviceTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./serviceTasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewServices/serviceTasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_serviceTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/NewServices/serviceTasks.vue?vue&type=template&id=55ceb349&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/NewServices/serviceTasks.vue?vue&type=template&id=55ceb349& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_serviceTasks_vue_vue_type_template_id_55ceb349___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./serviceTasks.vue?vue&type=template&id=55ceb349& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewServices/serviceTasks.vue?vue&type=template&id=55ceb349&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_serviceTasks_vue_vue_type_template_id_55ceb349___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_serviceTasks_vue_vue_type_template_id_55ceb349___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);