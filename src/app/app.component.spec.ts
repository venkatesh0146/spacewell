import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ScoreUpdateService } from '../score-update.service';

describe('AppComponent',() => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockService : any;
  beforeEach(async (()=>{
    TestBed.configureTestingModule({
      imports: [BrowserModule, FormsModule, HttpClientModule],
      declarations: [AppComponent, PlayerComponent],
      providers: [ScoreUpdateService],
      schemas : [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance;
    mockService = fixture.debugElement.injector.get(ScoreUpdateService)
    fixture.detectChanges();
 })
  
 it('should create component', ()=>{
  expect(component).toBeTruthy()
 })

 it('should call have winneer if winnerReceived is called', ()=>{
  component.winnerReceived('test')
  expect(component.isWinnerReceived).toBeTrue()
 })
 it('should Reset the count', ()=>{
  component.winnerReceived('test')
  expect(component.reset).toBeTrue()
 })
 it('winner name should be updated', ()=>{
  component.winnerReceived('test')
  expect(component.name).toBe('test')
 })

 it('should call reset Banner', ()=>{
  component.resetBanner(true);
  expect(component.isWinnerReceived).toBeFalse()
 })

  })


