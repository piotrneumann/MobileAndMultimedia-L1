import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {AboutPage} from '../about/about.page';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    anotherPage: AboutPage;

    constructor(public navCtrl: NavController,
                private router: Router) {
    }

    height: number;
    weight: number;
    bmiValue: number;
    bmiMessage: string;
    color: any;
    bgRed = 'bg-red';
    bgGreen = 'bg-green';
    bgBlue = 'bg-blue';
    error: boolean;

    calculateBMI() {
        this.bmiValue = null;
        if (this.weight > 0 && this.height > 0) {
            const finalBmi = this.weight / (this.height * this.height);
            this.bmiValue = parseFloat(finalBmi.toFixed(2));
            this.setBMIMessage();
            this.error = false;
        } else {
            this.error = true;
            this.setError();
        }
    }

    // setBMIMessage will set the text message based on the value of BMI
    private setBMIMessage() {
        if (this.bmiValue < 18.5) {
            this.color = this.bgBlue;
            this.bmiMessage = 'Underweight';
        }

        if (this.bmiValue > 18.5 && this.bmiValue < 25) {
            this.color = this.bgGreen;
            this.bmiMessage = 'Normal';
        }

        if (this.bmiValue > 25 && this.bmiValue < 30) {
            this.color = this.bgRed;
            this.bmiMessage = 'Overweight';
        }

        if (this.bmiValue > 30) {
            this.color = this.bgRed;
            this.bmiMessage = 'Obese';
        }
    }

    private setError() {
        this.bmiMessage = 'There is no value';
    }

    openModal() {

    }

    gotToAbout() {
        this.router.navigate(['/about']);
    }

    changeType() {
        this.bmiValue = null;
        if (this.weight > 0 && this.height > 0) {
            this.calculateBMI();
            const finalBmi = (this.weight / (this.height * this.height)) * 703;
            this.bmiValue = parseFloat(finalBmi.toFixed(2));
        } else {
            this.error = true;
            this.setError();
        }
    }
}
