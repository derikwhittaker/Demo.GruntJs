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