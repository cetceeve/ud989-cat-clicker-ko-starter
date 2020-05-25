var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg')

    this.level = ko.computed(function () {
        if (this.clickCount() > 19) return 'Teen';
        if (this.clickCount() > 9) return 'Newborn';
        return 'Infant';
    }, this);

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    }
}

ko.applyBindings(new ViewModel());