import { HttpClientModule } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ScoreUpdateService } from "src/score-update.service";
import { AppComponent } from "../app.component";
import { PlayerComponent } from "./player.component";

describe('playerComponent',() => {
    let component: PlayerComponent;
    let fixture: ComponentFixture<PlayerComponent>;
    let mockService : any = {
        playerReached40 : {
            Receiver: false,
            Server: false,
          },
          reset : true
    }
    let service ;

    beforeEach(async (()=>{
      TestBed.configureTestingModule({
        imports: [BrowserModule, FormsModule, HttpClientModule],
        declarations: [AppComponent, PlayerComponent],
        providers: [{provide :ScoreUpdateService,useValue:mockService}],
        schemas : [NO_ERRORS_SCHEMA]
      }).compileComponents();
    }))
  
    beforeEach(()=>{
      fixture = TestBed.createComponent(PlayerComponent)
      component = fixture.componentInstance;
      service = TestBed.get(ScoreUpdateService)
      fixture.detectChanges();
   })

   describe('should call updateScore',()=>{
    it('should resetBanner should emit ture when score is 0',()=>{
        component.score =0;
        spyOn(component.resetBanner,'emit');
        component.updateScore();
        expect(component.resetBanner.emit).toHaveBeenCalled()
    })
   })

   it('should score is less than 30 it increment value should be 15',()=>{
    component.score =0;
    spyOn(component.resetBanner,'emit');
    component.updateScore();
    expect(component.incrementValue).toBe(15)
})

it('should score is grater than 30 it increment value should be 10',()=>{
    component.score =30;
    spyOn(component.resetBanner,'emit');
    component.updateScore();
    expect(component.incrementValue).toBe(10)
});
    
})  