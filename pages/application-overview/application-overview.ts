import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {HomePage} from '../../pages/pages';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the ApplicationOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-application-overview',
    templateUrl: 'application-overview.html',
})
export class ApplicationOverviewPage {
    @ViewChild(Slides) slides: Slides;
    data = [
        {
            image: "assets/imgs/001.png",
        },
        {
            image: "assets/imgs/002.png",
        },
        {
            image: "assets/imgs/003.png",
        },
        {
            image: "assets/imgs/004.png",
        },
        {
            image: "assets/imgs/005.png",
        }
    ];
    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    }
    slideChanged() {
        var isEnd = this.slides.isEnd();
        if (isEnd) {

        }
        //        var total = this.slides.length();
        //        if (currentIndex === total - 1) {
        //            this.storage.set('isNewUser', "Y");
        //            this.navCtrl.setRoot(HomePage);
        //        } else {
        //            //console.log('Current index is', currentIndex);
        //        }
    }
    skipSlides() {
        this.storage.set('isNewUser', "Y");
        this.navCtrl.setRoot(HomePage);
    }
}
