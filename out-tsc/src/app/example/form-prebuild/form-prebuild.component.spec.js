import { async, TestBed } from '@angular/core/testing';
import { FormPrebuildComponent } from './form-prebuild.component';
describe('FormPrebuildComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FormPrebuildComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FormPrebuildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form-prebuild.component.spec.js.map