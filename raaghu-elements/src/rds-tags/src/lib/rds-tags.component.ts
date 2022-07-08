import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-tags',
  templateUrl: './rds-tags.component.html',
  styleUrls: ['./rds-tags.component.scss']
})
export class RdsTagsComponent implements OnInit {
  @Input()
  tagType?: string;

  inputText!: string;
  tagList: any[]=[]

  showtag: boolean = true;

  @Input() roles: 'Basic' | 'TagWithScroll' = 'Basic';
  @Input() colorVariant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'default' | 'light' | 'dark' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    var classes = ['bd-example']
    const tagColor = 'tag-' + `${this.colorVariant}`;
    classes.push(tagColor);

    if (this.tagType === 'Square') {
      classes.push('bd-example');
      classes.push('square-tags');
      return classes
    }
    if (this.tagType === 'Round') {
      classes.push('bd-example')
      classes.push('rounded-tags')
      return classes
    }
    return classes
  }

  addTag() {
    if (this.inputText.length > 0) {
    this.tagList.push(this.inputText);
    this.inputText = '';
      this.showtag = true
    }
  }
  deleteTag(index: number){
    this.tagList.splice(index, 1);
  }

}
