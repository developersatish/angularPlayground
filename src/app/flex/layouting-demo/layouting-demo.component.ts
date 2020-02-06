import { Component, OnInit, ViewChild, ViewContainerRef, QueryList, ViewChildren } from '@angular/core';
import { LayoutDirective, FlexDirective } from '@angular/flex-layout';

@Component({
  selector: 'app-layouting-demo',
  templateUrl: './layouting-demo.component.html',
  styleUrls: ['./layouting-demo.component.scss']
})
export class LayoutingDemoComponent implements OnInit {
  selectedLayout = 1;
  direction: 'row' | 'column' = 'row';
  mainAxis: 'start' | 'center' | 'end' | 'space-around' | 'space-between' =
    'start';
  crossAxis: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  mainAxisOptions = [
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly'
  ];
  crossAxisOptions = ['start', 'center', 'end', 'stretch'];

  contents = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Lorem ipsum dolor sit amet, consectetur...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  ];

  @ViewChild(LayoutDirective, {static:false})
  layoutDirective: FlexDirective;

  @ViewChildren(FlexDirective, {read: ViewContainerRef })
  flexDirectives: QueryList<FlexDirective>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(
        `flexDirective: `,
        this.flexDirectives.first,
        this.flexDirectives.first.grow
      );
      console.log(`layoutDirective: `, this.layoutDirective);
    }, 0);
  }
  constructor() {}

  ngOnInit() {}
}
