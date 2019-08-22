import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-full-demo',
  templateUrl: './full-demo.component.html',
  styleUrls: ['./full-demo.component.scss']
})
export class FullDemoComponent implements OnInit  {
  // Container
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';
  wrap: 'wrap' | 'no-wrap' = 'no-wrap' ;
  mainAxis: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between' = 'flex-start';
  crossAxis: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'stretch';
  mainAxisOptions = ['flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'];
  crossAxisOptions = ['flex-start', 'center', 'flex-end', 'stretch'];
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'flex-start';
  alignContent: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'stretch';
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline' = 'stretch';
  justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly'];
  alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'stretch'];
  alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
  alignSelfOptions = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
  // Items
  grow = 0;
  shrink = 0;
  basis = 'auto';
  alignSelf: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' = 'auto';
  order = 0;
  items = 3;

  flexForm: FormGroup;

  itemFlexOptions(setAlignSelf?: boolean) {
    return {
      grow: this.grow,
      shrink: this.shrink,
      basis: this.flexForm.get('basis').value,
      alignSelf: this.alignSelf,
      order: this.order,
    }
  }

  get itemsFormArray(): FormArray {
    return this.flexForm.get('items') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.flexForm = this.formBuilder.group({
      items: this.formBuilder.array([]),
      basis: this.basis,
      justifyContent: this.justifyContent,
      alignContent: this.alignContent,
      alignItems: this.alignItems,
    });

    let numberOfItems = 0;

    while (numberOfItems < this.items) {      
      this.itemsFormArray.push(this.formBuilder.group(this.itemFlexOptions()));
      numberOfItems++;
    }

    this.flexForm
          .get('basis')
          .valueChanges
          .subscribe(newValue => {
            this.itemsFormArray
                  .controls
                  .forEach((control, index) => this.itemsFormArray.at(index).get('basis').setValue(newValue));
          })

    
    this.flexForm
          .get('alignContent')
          .valueChanges
          .subscribe(newValue => {
            this.itemsFormArray
                  .controls
                  .forEach((control, index) => this.itemsFormArray.at(index).get('alignSelf').setValue('auto'));
          })
    
  }

  getFlexOptions(index: number) {
    const itemFlexOptions = this.itemsFormArray.at(index).value;

    if (itemFlexOptions.grow || itemFlexOptions.shrink || (itemFlexOptions.basis !== this.basis)) {
      return `${itemFlexOptions.grow} ${itemFlexOptions.shrink} ${itemFlexOptions.basis}`;
    } else {
      return `${this.grow} ${this.shrink} ${this.basis}`;
    }
  }

  getFlexAlignSelf(index: number) {
    const itemFlexOptions = this.itemsFormArray.at(index).value;

    if (itemFlexOptions.alignSelf !== this.alignSelf) {
      return itemFlexOptions.alignSelf;
    } else {
      return this.alignSelf;
    }
  }

  getFlexOrder(index: number) {
    const itemFlexOptions = this.itemsFormArray.at(index).value;

    if (itemFlexOptions.order !== this.order) {
      return itemFlexOptions.order;
    } else {
      return this.order;
    }
  }

  add(type: string) {
    this[type]++;
    if (type === 'items')  {
      this.itemsFormArray.push(this.formBuilder.group(this.itemFlexOptions(true)));
    } else {
      this.itemsFormArray.controls.forEach((control, index) => this.itemsFormArray.at(index).get(type).setValue(this[type]))
    }
  }

  remove(type: string) {
    if (!this[type]) return;
    this[type]--;
    if (type === 'items')  {
      this.itemsFormArray.removeAt(this[type]);
    } else {
      this.itemsFormArray.controls.forEach((control, index) => this.itemsFormArray.at(index).get(type).setValue(this[type]))
    }
  }
}
