var initialCats = [{
        "name": "Flauschi",
        "imgSrc": "img/4154543904_6e2428c421_z.jpg",
        "clickCount": 0,
        "nicknames": ['Flachmann', 'Flaunders']
    },
    {
        "name": "Wuschel",
        "imgSrc": "img/22252709_010df3379e_z.jpg",
        "clickCount": 0,
        "nicknames": ['Mister W', 'Wall_E']
    },
    {
        "name": "Tobbsen",
        "imgSrc": "img/434164568_fea0ad4013_z.jpg",
        "clickCount": 0,
        "nicknames": ['Tobbsen', 'Tabbers', 'Tabberman']
    },
    {
        "name": "Gustaf",
        "imgSrc": "img/1413379559_412a540d29_z.jpg",
        "clickCount": 0,
        "nicknames": ['Hubert', 'Olaf', 'Jens']
    },
    {
        "name": "Quaschning",
        "imgSrc": "img/9648464288_2516b35537_z.jpg",
        "clickCount": 0,
        "nicknames": ['Professor']
    }
];

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
    self = this;

    this.cats = ko.observableArray();

    initialCats.forEach(function (catItem) {
        self.cats.push(new Cat(catItem));
    })

    this.currentCat = ko.observable(self.cats()[0]);

    this.setCurrentCat = function () {
        self.currentCat(this);
    }

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
}

ko.applyBindings(new ViewModel());