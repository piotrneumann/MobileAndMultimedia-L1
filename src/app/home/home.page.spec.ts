import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('BMI', () => {
        component.height = 1.8;
        component.weight = 77;
        component.calculateBMI();
        expect(component.bmiValue).toBe(23.77);
        expect(component.bmiMessage).toBe('Normal');
    });

    it('BMI Imperial', () => {
        component.height = 71;
        component.weight = 155;
        component.changeType();
        expect(component.bmiValue).toBe(21.62);
        expect(component.bmiMessage).toBe('Underweight');
    });
});
