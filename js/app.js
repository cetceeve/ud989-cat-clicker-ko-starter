var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function () {
        if (this.clickCount() > 19) return 'Teen';
        if (this.clickCount() > 9) return 'Newborn';
        return 'Infant';
    }, this);
}

var ViewModel = function () {

    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknames: ['Tobbsen', 'Tabbers', 'Tabberman']
    }));

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
}

ko.applyBindings(new ViewModel());