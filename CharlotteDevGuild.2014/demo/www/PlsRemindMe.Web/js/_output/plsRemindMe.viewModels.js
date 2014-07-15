var plsRemindMe;

!function(plsRemindMe) {
    !function(Models) {
        var CurrentUserModel = function() {
            function CurrentUserModel(id, firstName, lastName) {
                var _this = this;
                this.FirstName = ko.observable(""), this.LastName = ko.observable(""), this.EmailAddress = ko.observable(""), 
                this.Id = ko.observable(""), this.Id(id), this.FirstName(firstName), this.LastName(lastName), 
                this.Name = ko.computed(function() {
                    return _this.FirstName() + " " + _this.LastName();
                });
            }
            return CurrentUserModel;
        }();
        Models.CurrentUserModel = CurrentUserModel;
    }(plsRemindMe.Models || (plsRemindMe.Models = {}));
    plsRemindMe.Models;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Templates) {
        Templates.UpcomingReminders = "reminders.upcoming", Templates.ReminderStats = "reminders.stats", 
        Templates.Reminders = "reminders.main";
    }(plsRemindMe.Templates || (plsRemindMe.Templates = {}));
    plsRemindMe.Templates;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(DataLoadStatuses) {
        DataLoadStatuses[DataLoadStatuses.Initial = 1] = "Initial", DataLoadStatuses[DataLoadStatuses.Fetching = 2] = "Fetching", 
        DataLoadStatuses[DataLoadStatuses.NoResults = 3] = "NoResults", DataLoadStatuses[DataLoadStatuses.NoFilterResults = 4] = "NoFilterResults", 
        DataLoadStatuses[DataLoadStatuses.FoundResults = 5] = "FoundResults";
    }(plsRemindMe.DataLoadStatuses || (plsRemindMe.DataLoadStatuses = {}));
    plsRemindMe.DataLoadStatuses;
    !function(ReminderStatuses) {
        ReminderStatuses[ReminderStatuses.Pending = 1] = "Pending", ReminderStatuses[ReminderStatuses.Overdue = 2] = "Overdue";
    }(plsRemindMe.ReminderStatuses || (plsRemindMe.ReminderStatuses = {}));
    plsRemindMe.ReminderStatuses;
    !function(FrequencyTypes) {
        FrequencyTypes[FrequencyTypes.Once = 1] = "Once", FrequencyTypes[FrequencyTypes.Weekly = 2] = "Weekly", 
        FrequencyTypes[FrequencyTypes.BiWeekly = 3] = "BiWeekly", FrequencyTypes[FrequencyTypes.Monthly = 4] = "Monthly", 
        FrequencyTypes[FrequencyTypes.BiMonthly = 5] = "BiMonthly", FrequencyTypes[FrequencyTypes.Quarterly = 6] = "Quarterly", 
        FrequencyTypes[FrequencyTypes.SemiAnnually = 7] = "SemiAnnually", FrequencyTypes[FrequencyTypes.Yearly = 8] = "Yearly";
    }(plsRemindMe.FrequencyTypes || (plsRemindMe.FrequencyTypes = {}));
    plsRemindMe.FrequencyTypes;
    !function(ReminderPriorityTypes) {
        ReminderPriorityTypes[ReminderPriorityTypes.Normal = 1] = "Normal", ReminderPriorityTypes[ReminderPriorityTypes.High = 2] = "High", 
        ReminderPriorityTypes[ReminderPriorityTypes.Urgent = 3] = "Urgent", ReminderPriorityTypes[ReminderPriorityTypes.HairsOnFire = 4] = "HairsOnFire";
    }(plsRemindMe.ReminderPriorityTypes || (plsRemindMe.ReminderPriorityTypes = {}));
    plsRemindMe.ReminderPriorityTypes;
    !function(ForcastingType) {
        ForcastingType[ForcastingType.All = 1] = "All", ForcastingType[ForcastingType.Today = 2] = "Today", 
        ForcastingType[ForcastingType.Tomorrow = 3] = "Tomorrow", ForcastingType[ForcastingType.ThisWeek = 4] = "ThisWeek", 
        ForcastingType[ForcastingType.NextWeek = 5] = "NextWeek", ForcastingType[ForcastingType.ThisMonth = 6] = "ThisMonth", 
        ForcastingType[ForcastingType.NextMonth = 7] = "NextMonth", ForcastingType[ForcastingType.Overdue = 98] = "Overdue", 
        ForcastingType[ForcastingType.Scheduled = 99] = "Scheduled";
    }(plsRemindMe.ForcastingType || (plsRemindMe.ForcastingType = {}));
    plsRemindMe.ForcastingType;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Helpers) {
        Helpers.ValidationConfiguration = {
            registerExtenders: !0,
            messagesOnModified: !0,
            insertMessages: !1,
            parseInputAttributes: !0,
            messageTemplate: null,
            decorateElement: !0,
            errorElementClass: "prm-inline-field-validation-error"
        }, Helpers.FrequencyNameBuilder = function(frequency) {
            switch (frequency) {
              case 1:
                return "Just Once";

              case 2:
                return "Every Week";

              case 3:
                return "Every 2 Weeks";

              case 4:
                return "Every Month";

              case 6:
                return "Every 3 Months";

              case 8:
                return "Once a Year";
            }
            return "";
        }, Helpers.StatusNameBuilder = function(staus) {
            switch (staus) {
              case 1:
                return "Scheduled";

              case 2:
                return "Overdue";
            }
            return "";
        };
        var jQuery = function() {
            function jQuery() {}
            return jQuery.prototype.getScriptContents = function(id) {
                var script = $("#" + id);
                if (void 0 === script.html()) throw "Id of " + id + " was not found";
                var contents = $($.parseHTML(script.html())[1]);
                return contents;
            }, jQuery;
        }();
        Helpers.jQuery = jQuery;
    }(plsRemindMe.Helpers || (plsRemindMe.Helpers = {}));
    plsRemindMe.Helpers;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Models) {
        var UpcomingReminderModel = function() {
            function UpcomingReminderModel() {
                var _this = this;
                this.Id = ko.observable(0), this.Title = ko.observable(""), this.Description = ko.observable(""), 
                this.Date = ko.observable(void 0), this.Time = ko.observable(void 0), this.AllDay = ko.observable(!1), 
                this.Frequency = ko.observable(1), this.Occurrences = ko.observable(1), this.Priority = ko.observable(1), 
                this.NotifyByEmail = ko.observable(!1), this.NotifyBySms = ko.observable(!1), this.NotifyByCall = ko.observable(!1), 
                this.Status = ko.observable(0), this.ForcastTypes = ko.observableArray([]), this.OthersToRemind = ko.observableArray([]), 
                this.FrequencyName = ko.computed(function() {
                    return plsRemindMe.Helpers.FrequencyNameBuilder(_this.Frequency());
                }), this.StatusName = ko.computed(function() {
                    return plsRemindMe.Helpers.StatusNameBuilder(_this.Status());
                });
            }
            return UpcomingReminderModel;
        }();
        Models.UpcomingReminderModel = UpcomingReminderModel;
        var GuestToRemindModel = function() {
            function GuestToRemindModel() {
                this.Id = ko.observable(0), this.FirstName = ko.observable(""), this.LastName = ko.observable(""), 
                this.EmailAddress = ko.observable(""), this.DisplayName = ko.observable("");
            }
            return GuestToRemindModel;
        }();
        Models.GuestToRemindModel = GuestToRemindModel;
    }(plsRemindMe.Models || (plsRemindMe.Models = {}));
    plsRemindMe.Models;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Models) {
        var UpcomingReminderStatModel = function() {
            function UpcomingReminderStatModel(name, count, statType, selected) {
                "undefined" == typeof name && (name = ""), "undefined" == typeof count && (count = 0), 
                "undefined" == typeof statType && (statType = 0), "undefined" == typeof selected && (selected = !1), 
                this.Name = ko.observable(""), this.Count = ko.observable(0), this.StatType = ko.observable(0), 
                this.Selected = ko.observable(!1), this.Name(name), this.Count(count), this.StatType(statType), 
                this.Selected(selected);
            }
            return UpcomingReminderStatModel;
        }();
        Models.UpcomingReminderStatModel = UpcomingReminderStatModel;
    }(plsRemindMe.Models || (plsRemindMe.Models = {}));
    plsRemindMe.Models;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Models) {
        var ReminderPriorityModel = function() {
            function ReminderPriorityModel(id, name, selected) {
                "undefined" == typeof selected && (selected = !1), this.Name = ko.observable(""), 
                this.Id = ko.observable(0), this.Selected = ko.observable(!1), this.Id(id), this.Name(name), 
                this.Selected(selected);
            }
            return ReminderPriorityModel;
        }();
        Models.ReminderPriorityModel = ReminderPriorityModel;
    }(plsRemindMe.Models || (plsRemindMe.Models = {}));
    plsRemindMe.Models;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Models) {
        var ReminderFrequencyModel = function() {
            function ReminderFrequencyModel(id, name, selected) {
                "undefined" == typeof selected && (selected = !1), this.Name = ko.observable(""), 
                this.Id = ko.observable(0), this.Selected = ko.observable(!1), this.Id(id), this.Name(name), 
                this.Selected(selected);
            }
            return ReminderFrequencyModel;
        }();
        Models.ReminderFrequencyModel = ReminderFrequencyModel;
    }(plsRemindMe.Models || (plsRemindMe.Models = {}));
    plsRemindMe.Models;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    var _baseViewModel = function() {
        function _baseViewModel(currentUser) {
            this.ErrorMessage = ko.observable(""), this.WarningMessage = ko.observable(""), 
            this.CurrentUser = ko.observable(void 0), this.CurrentUser(currentUser);
        }
        return _baseViewModel;
    }();
    plsRemindMe._baseViewModel = _baseViewModel;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(Routes) {
        Routes.UpcomingReminders = "api/Reminders/Upcoming", Routes.ReminderStats = "api/Reminders/Stats", 
        Routes.CreateReminder = "api/Reminders/Create", Routes.DeleteReminder = "api/Reminders/Delete", 
        Routes.ReminderConnections = "api/Connections/ReminderConnections";
    }(plsRemindMe.Routes || (plsRemindMe.Routes = {}));
    plsRemindMe.Routes;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    !function(MessageTypes) {
        MessageTypes.SelectedReminderStateChanged = "SelectedReminderStateChanged", MessageTypes.NewReminderAdded = "NewReminderAdded";
    }(plsRemindMe.MessageTypes || (plsRemindMe.MessageTypes = {}));
    plsRemindMe.MessageTypes;
}(plsRemindMe || (plsRemindMe = {}));

var __extends = this.__extends || function(d, b) {
    function __() {
        this.constructor = d;
    }
    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
    __.prototype = b.prototype, d.prototype = new __();
}, plsRemindMe;

!function(plsRemindMe) {
    var NewReminderViewModel = function(_super) {
        function NewReminderViewModel(currentUser) {
            var _this = this;
            _super.call(this, currentUser), this.Reminder = ko.observable(new plsRemindMe.Models.UpcomingReminderModel()), 
            this.CreatedReminders = ko.observableArray([]), this.ReminderFrequencies = ko.observableArray([]), 
            this.ReminderPriorities = ko.observableArray([]), this.ReminderGuests = ko.observableArray([]), 
            this.tempEmailAddress = ko.observable(""), this.Modal = void 0, this.IsSaved = ko.observable(!1), 
            this.AllDayChecked = ko.computed(function() {
                _this.Reminder().AllDay() && _this.Reminder().Time("");
            }), this.TimeChanged = ko.computed(function() {
                "" !== _this.Reminder().Time() && _this.Reminder().AllDay(!1);
            }), this.ShowOccurrences = ko.computed(function() {
                return 1 != _this.Reminder().Frequency();
            }), this.setupFrequencies(), this.setupPriorities(), this.setupValidation(), this.fetchConnections();
        }
        return __extends(NewReminderViewModel, _super), NewReminderViewModel.prototype.fetchConnections = function() {
            var self = this, route = plsRemindMe.Routes.ReminderConnections + "/e0aed236-3177-4ff7-9a39-25bb16c8ed62";
            $.get(route).done(function(results) {
                var convertedResults = [];
                _.each(results, function(result) {
                    convertedResults.push(ko.mapping.fromJS(result, {}, new plsRemindMe.Models.GuestToRemindModel()));
                }), self.ReminderGuests(convertedResults);
            }).fail();
        }, NewReminderViewModel.prototype.postRenderSetup = function() {
            var self = this, othersToRemindSource = _.map(self.ReminderGuests(), function(otherToRemind) {
                return otherToRemind.EmailAddress();
            });
            $("#remindOthersInput").typeahead({
                source: othersToRemindSource,
                updater: function(item) {
                    var match = _.find(self.ReminderGuests(), function(guest) {
                        return guest.EmailAddress() == item;
                    });
                    self.Reminder().OthersToRemind.push(match), self.tempEmailAddress("");
                }
            });
            var picker = $(".dueDatePicker");
            picker.datepicker({
                autoclose: !0
            });
            var timePIcker = $(".dueTimePicker");
            timePIcker.timepicker();
        }, NewReminderViewModel.prototype.addOtherReminder = function(emailAddress) {
            var self = this, guestToRemind = new plsRemindMe.Models.GuestToRemindModel();
            guestToRemind.EmailAddress(emailAddress()), self.Reminder().OthersToRemind.push(guestToRemind), 
            self.tempEmailAddress("");
        }, NewReminderViewModel.prototype.removeOtherReminder = function(guestToRemind) {
            var self = this;
            self.Reminder().OthersToRemind.remove(guestToRemind);
        }, NewReminderViewModel.prototype.saveReminder = function() {
            var _this = this, self = this;
            if (!this.Reminder().isValid()) return this.ErrorMessage("Please provide all required pieces of information."), 
            void $("#newReminderErrorAlert").show();
            if (moment(this.Reminder().Date()).isBefore(moment().startOf("day"))) return this.ErrorMessage("The reminder date cannot be in the past."), 
            void $("#newReminderErrorAlert").show();
            var model = ko.mapping.toJS(this.Reminder), route = plsRemindMe.Routes.CreateReminder;
            this.IsSaved(!0), $.post(route, model).done(function(results) {
                _.each(results, function(newReminder) {
                    var converted = ko.mapping.fromJS(newReminder, {}, new plsRemindMe.Models.UpcomingReminderModel());
                    converted.isValid = function() {
                        return !0;
                    }, self.CreatedReminders.push(converted);
                }), _this.Modal.modal("hide");
            }).fail(function(reason) {
                self.ErrorMessage(reason.message);
            }).always(function() {});
        }, NewReminderViewModel.prototype.selectFrequency = function(frequency) {
            var self = this;
            _.each(self.ReminderFrequencies(), function(item) {
                item.Selected() && item.Selected(!1);
            }), frequency.Selected(!0), self.Reminder().Frequency(frequency.Id());
        }, NewReminderViewModel.prototype.selectPriority = function(priority) {
            var self = this;
            _.each(self.ReminderPriorities(), function(item) {
                item.Selected() && item.Selected(!1);
            }), priority.Selected(!0), self.Reminder().Priority(priority.Id());
        }, NewReminderViewModel.prototype.setupValidation = function() {
            var self = this;
            self.Reminder().Title.extend({
                required: !0
            }), self.Reminder().Date.extend({
                required: !0,
                date: !0
            }), self.Reminder().Time.extend({
                required: {
                    onlyIf: function() {
                        return self.Reminder().AllDay() === !1 && "" === self.Reminder().Time();
                    }
                }
            }), self.Reminder().Frequency.extend({
                required: !0
            }), self.Reminder().Occurrences.extend({
                validation: {
                    validator: function(value, seed) {
                        return seed && 1 != self.Reminder().Frequency() ? value > 0 : !0;
                    },
                    message: "Must provide Occurrences",
                    params: !0
                }
            }), ko.validation.group(self.Reminder()).showAllMessages();
        }, NewReminderViewModel.prototype.setupPriorities = function() {
            this.ReminderPriorities.push(new plsRemindMe.Models.ReminderPriorityModel(1, "Normal", !0)), 
            this.ReminderPriorities.push(new plsRemindMe.Models.ReminderPriorityModel(2, "High")), 
            this.ReminderPriorities.push(new plsRemindMe.Models.ReminderPriorityModel(3, "Urgent")), 
            this.ReminderPriorities.push(new plsRemindMe.Models.ReminderPriorityModel(4, "On Fire"));
        }, NewReminderViewModel.prototype.setupFrequencies = function() {
            this.ReminderFrequencies.push(new plsRemindMe.Models.ReminderFrequencyModel(1, "Once", !0)), 
            this.ReminderFrequencies.push(new plsRemindMe.Models.ReminderFrequencyModel(2, "Weekly")), 
            this.ReminderFrequencies.push(new plsRemindMe.Models.ReminderFrequencyModel(3, "Bi-Weekly")), 
            this.ReminderFrequencies.push(new plsRemindMe.Models.ReminderFrequencyModel(4, "Montly")), 
            this.ReminderFrequencies.push(new plsRemindMe.Models.ReminderFrequencyModel(6, "Quarterly")), 
            this.ReminderFrequencies.push(new plsRemindMe.Models.ReminderFrequencyModel(8, "Yearly"));
        }, NewReminderViewModel;
    }(plsRemindMe._baseViewModel);
    plsRemindMe.NewReminderViewModel = NewReminderViewModel;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    var UpcomingRemindersViewModel = function() {
        function UpcomingRemindersViewModel(currentUser) {
            this.CurrentUser = ko.observable(void 0), this.Stats = ko.observableArray([]), this.NavigationStats = ko.observableArray([]), 
            this.FilterStats = ko.observableArray([]), this.Reminders = ko.observableArray([]), 
            this.RemindersUnFiltered = ko.observableArray([]), this.SelectedNavFilter = ko.observable(), 
            this.SelectedRangeFilter = ko.observable(), this.ReminderAddedPublisher = ko.observable().publishOn(plsRemindMe.MessageTypes.NewReminderAdded), 
            this.DataLoadStatus = ko.observable(1), this.pageSize = 8, this.activePage = 1, 
            this.CurrentUser(currentUser);
        }
        return UpcomingRemindersViewModel.prototype.deleteReminder = function(reminder) {
            var self = this, elementKey = "[data-key='" + reminder.Id() + "']";
            $(elementKey).hide({
                effect: "highlight",
                complete: function() {
                    var route = plsRemindMe.Routes.DeleteReminder + "/" + reminder.Id();
                    $.ajax({
                        url: route,
                        type: "DELETE"
                    }).done(function() {}).always(), self.updateStatusStats(reminder, !1), self.Reminders.remove(reminder), 
                    self.RemindersUnFiltered.remove(reminder);
                }
            });
        }, UpcomingRemindersViewModel.prototype.determinePriorityIndicator = function(reminder) {
            switch (reminder.Priority()) {
              case 1:
                return "prm-normal-priority-indicator";

              case 2:
                return "prm-high-priority-indicator";

              case 3:
                return "prm-urgent-priority-indicator";

              case 4:
                return "prm-onfire-priority-indicator";

              default:
                return "";
            }
        }, UpcomingRemindersViewModel.prototype.editReminder = function() {
        }, UpcomingRemindersViewModel.prototype.fetchReminders = function() {
            var self = this, route = plsRemindMe.Routes.UpcomingReminders + "/" + self.CurrentUser().Id();
            self.DataLoadStatus(2), $.get(route).done(function(results) {
                var convertedResults = [];
                _.each(results, function(result) {
                    var mappedReminder = ko.mapping.fromJS(result, {}, new plsRemindMe.Models.UpcomingReminderModel());
                    convertedResults.push(mappedReminder);
                }), self.RemindersUnFiltered(convertedResults), self.DataLoadStatus(0 === convertedResults.length ? 3 : 5), 
                convertedResults.length > 0 && self.filter(1, 1, 1, !0), $("[data-toggle='tooltip']").tooltip();
            }).fail();
        }, UpcomingRemindersViewModel.prototype.fetchStats = function() {
            var self = this, route = plsRemindMe.Routes.ReminderStats + "/" + self.CurrentUser().Id();
            $.get(route).done(function(results) {
                var convertedResults = [];
                _.each(results, function(result) {
                    var converted = ko.mapping.fromJS(result, {}, new plsRemindMe.Models.UpcomingReminderStatModel());
                    if (convertedResults.push(converted), 1 == converted.StatType()) {
                        var navStat = converted, rangeStat = ko.mapping.fromJS(result, {}, new plsRemindMe.Models.UpcomingReminderStatModel());
                        navStat.Selected(!0), rangeStat.Selected(!0), self.NavigationStats.push(navStat), 
                        self.FilterStats.push(rangeStat), self.SelectedNavFilter(navStat), self.SelectedRangeFilter(rangeStat);
                    } else 98 == converted.StatType() || 99 == converted.StatType() ? self.NavigationStats.push(converted) : self.FilterStats.push(converted);
                }), self.Stats(convertedResults);
            }).fail();
        }, UpcomingRemindersViewModel.prototype.filter = function(statusFilterKey, rangeFilterKey, currentPage, setupPaging) {
            "undefined" == typeof currentPage && (currentPage = 1), "undefined" == typeof setupPaging && (setupPaging = !1);
            var self = this;
            self.DataLoadStatus(2);
            var filtered = _.filter(self.RemindersUnFiltered(), function(item) {
                var forcastMatch = _.any(item.ForcastTypes(), function(type) {
                    var typeMatch = type == statusFilterKey;
                    return typeMatch;
                });
                return forcastMatch;
            });
            filtered = _.filter(filtered, function(item) {
                var forcastMatch = _.any(item.ForcastTypes(), function(type) {
                    var typeMatch = type == rangeFilterKey;
                    return typeMatch;
                });
                return forcastMatch;
            }), filtered = _.sortBy(filtered, function(item) {
                return item.Date();
            });
            var start = 1 == currentPage ? 0 : (currentPage - 1) * self.pageSize, end = start + self.pageSize <= filtered.length ? self.pageSize : void 0, paged = filtered.slice(start, end);
            self.Reminders([]), self.Reminders(paged), self.DataLoadStatus(paged.length > 0 ? 5 : 4), 
            setupPaging && self.setupPaging(1, filtered.length);
        }, UpcomingRemindersViewModel.prototype.newReminder = function() {
            var self = this, helper = new plsRemindMe.Helpers.jQuery(), dialog = helper.getScriptContents("reminderDialogHtml");
            dialog.on("hidden", function() {
                if (dialog.off("shown"), newReminder.IsSaved()) {
                    _.each(newReminder.CreatedReminders(), function(reminder) {
                        self.RemindersUnFiltered.unshift(reminder), self.ReminderAddedPublisher(reminder), 
                        self.updateStatusStats(reminder);
                    });
                    var navFilterType = self.SelectedNavFilter() ? self.SelectedNavFilter().StatType() : 1, rangeFilterType = self.SelectedRangeFilter() ? self.SelectedRangeFilter().StatType() : 1;
                    self.filter(navFilterType, rangeFilterType, 1, !0);
                }
                dialog.remove();
            }), dialog.on("shown", function() {
                newReminder.postRenderSetup();
            });
            var newReminder = new plsRemindMe.NewReminderViewModel(this.CurrentUser());
            newReminder.Modal = dialog;
            var dom = dialog[0];
            ko.applyBindingsWithValidation(newReminder, dom, plsRemindMe.Helpers.ValidationConfiguration), 
            dialog.modal("show");
        }, UpcomingRemindersViewModel.prototype.afterRender = function(element, viewModel) {
            $(element).length > 1 && viewModel.setupPaging(1, viewModel.Reminders().length);
        }, UpcomingRemindersViewModel.prototype.setupPaging = function(currentPage, totalRecordsToPage) {
            var self = this, totalPages = Math.floor(totalRecordsToPage / this.pageSize + 1);
            if (totalPages > 1) {
                var options = {
                    currentPage: 1,
                    totalPages: totalPages,
                    useBootstrapTooltip: !0,
                    onPageClicked: function(e, event, type, page) {
                        self.onPageClicked(e, event, type, page);
                    }
                };
                $("#prm-remindersPaginator").show(), $("#prm-remindersPaginator").bootstrapPaginator(options);
            } else $("#prm-remindersPaginator").hide();
        }, UpcomingRemindersViewModel.prototype.onPageClicked = function(e, event, type, page) {
            var self = this;
            self.activePage = page;
            var navFilterType = self.SelectedNavFilter() ? self.SelectedNavFilter().StatType() : 1, rangeFilterType = self.SelectedRangeFilter() ? self.SelectedRangeFilter().StatType() : 1;
            self.filter(navFilterType, rangeFilterType, page, !1);
        }, UpcomingRemindersViewModel.prototype.selectNavFilter = function(filter) {
            var self = this;
            _.each(self.NavigationStats(), function(item) {
                item.Selected(item == filter);
            }), self.SelectedNavFilter(filter), self.filter(self.SelectedNavFilter().StatType(), self.SelectedRangeFilter().StatType(), 1, !0);
        }, UpcomingRemindersViewModel.prototype.selectRangeFilter = function(filter) {
            var self = this;
            _.each(self.FilterStats(), function(item) {
                item.Selected(item == filter);
            }), self.SelectedRangeFilter(filter), self.filter(self.SelectedNavFilter().StatType(), self.SelectedRangeFilter().StatType(), 1, !0);
        }, UpcomingRemindersViewModel.prototype.showDatePicker = function(reminder, event) {
            var helper = new plsRemindMe.Helpers.jQuery(), html = helper.getScriptContents("reminderDateHtml");
            $(event.target).popover({
                html: !0,
                placement: "right",
                title: "Change Date",
                content: html
            }).click(function(event) {
                event.stopPropagation(), $(event.target).popover("show");
            }), $("html").click(function() {
                $(event.target).popover("hide");
            });
        }, UpcomingRemindersViewModel.prototype.updateStatusStats = function(reminder, beingAdded) {
            "undefined" == typeof beingAdded && (beingAdded = !0);
            var hasScheduled, hasOverdue = !1;
            reminder.ForcastTypes().indexOf(99) >= 0 ? hasScheduled = !0 : reminder.ForcastTypes().indexOf(98) >= 0 && (hasOverdue = !0), 
            _.each(this.NavigationStats(), function(stat) {
                switch (stat.StatType()) {
                  case 1:
                    stat.Count(beingAdded ? stat.Count() + 1 : stat.Count() - 1);
                    break;

                  case 99:
                    hasScheduled && stat.Count(beingAdded ? stat.Count() + 1 : stat.Count() - 1);
                    break;

                  case 98:
                    hasOverdue && stat.Count(beingAdded ? stat.Count() + 1 : stat.Count() - 1);
                }
            });
        }, UpcomingRemindersViewModel;
    }();
    plsRemindMe.UpcomingRemindersViewModel = UpcomingRemindersViewModel;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    var UpcomingReminderStatsViewModel = function() {
        function UpcomingReminderStatsViewModel() {
            var _this = this;
            this.SelectedStat = ko.observable().publishOn(plsRemindMe.MessageTypes.SelectedReminderStateChanged), 
            this.Stats = ko.observableArray([]), this.ReminderAddedSubscriber = ko.observable().subscribeTo(plsRemindMe.MessageTypes.NewReminderAdded), 
            this.ReminderAddedChanged = ko.computed(function() {
                _this.ReminderAddedSubscriber() && _this.updateStats(_this.ReminderAddedSubscriber());
            });
        }
        return UpcomingReminderStatsViewModel.prototype.fetch = function() {
            var self = this, route = plsRemindMe.Routes.ReminderStats + "/e0aed236-3177-4ff7-9a39-25bb16c8ed62";
            $.get(route).done(function(results) {
                var convertedResults = [];
                _.each(results, function(result) {
                    convertedResults.push(ko.mapping.fromJS(result, {}, new plsRemindMe.Models.UpcomingReminderStatModel()));
                }), self.Stats(convertedResults);
            }).fail();
        }, UpcomingReminderStatsViewModel.prototype.selectReminderStat = function(stat) {
            var filtered = _.filter(this.Stats(), function(stat) {
                return stat.Selected() === !0;
            });
            _.each(filtered, function(stat) {
                stat.Selected(!1);
            }), stat.Selected(!0), this.SelectedStat(stat);
        }, UpcomingReminderStatsViewModel.prototype.updateStats = function(reminder) {
            var types = reminder.ForcastTypes();
            _.each(this.Stats(), function(stat) {
                types.indexOf(stat.StatType()) >= 0 && stat.Count(stat.Count() + 1);
            });
        }, UpcomingReminderStatsViewModel;
    }();
    plsRemindMe.UpcomingReminderStatsViewModel = UpcomingReminderStatsViewModel;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    var RemindersViewModel = function() {
        function RemindersViewModel(currentUser) {
            this.CurrentUser = ko.observable(void 0), this.ReminderStats = new plsRemindMe.UpcomingReminderStatsViewModel(), 
            this.PrimaryViewTemplate = ko.observable(), this.SecondaryViewTemplate = ko.observable(), 
            this.CurrentUser(currentUser), this.UpcomingReminders = new plsRemindMe.UpcomingRemindersViewModel(currentUser), 
            this.PrimaryViewTemplate(new ViewTemplate(plsRemindMe.Templates.UpcomingReminders, this.UpcomingReminders)), 
            this.SecondaryViewTemplate(new ViewTemplate(plsRemindMe.Templates.ReminderStats, this.ReminderStats)), 
            this.UpcomingReminders.fetchReminders(), this.UpcomingReminders.fetchStats();
        }
        return RemindersViewModel;
    }();
    plsRemindMe.RemindersViewModel = RemindersViewModel;
    var ViewTemplate = function() {
        function ViewTemplate(template, viewModel) {
            this.Template = ko.observable(), this.ViewModel = ko.observable(), this.Template(template), 
            this.ViewModel(viewModel);
        }
        return ViewTemplate;
    }();
    plsRemindMe.ViewTemplate = ViewTemplate;
}(plsRemindMe || (plsRemindMe = {}));

var plsRemindMe;

!function(plsRemindMe) {
    var MainViewModel = function() {
        function MainViewModel() {
            this.CurrentViewModel = {}, this.SetupTemplateEngine(), this.CurrentUser = ko.observable(new plsRemindMe.Models.CurrentUserModel("e0aed236-3177-4ff7-9a39-25bb16c8ed62", "Derik", "Whittaker")), 
            this.CurrentViewModel = new plsRemindMe.RemindersViewModel(this.CurrentUser());
        }
        return MainViewModel.prototype.SetupTemplateEngine = function() {
            infuser.defaults.templatePrefix = "_", infuser.defaults.templateSuffix = ".tmpl.html", 
            infuser.defaults.templateUrl = "/Templates";
        }, MainViewModel;
    }();
    plsRemindMe.MainViewModel = MainViewModel;
}(plsRemindMe || (plsRemindMe = {}));