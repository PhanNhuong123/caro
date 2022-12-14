import { Component, Input, OnInit } from '@angular/core';
import { SvgIcon } from 'src/app/share/interface/svg-icon.interface';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() iconName = '';
  @Input() iconClass = '';

  public currentIcon: SvgIcon | null = null;

  private listIcon: SvgIcon[] = [
    {
      name: 'o',
      value: `
      <path d="M17 0V35" stroke="#CCCCCC" />
      <path d="M0 17L35 17" stroke="#CCCCCC" />
      <path
          d="M13.7346 22.8114C0.908682 17.2586 9.34728 12.4604 14.9311 10.0909C21.9507 7.39718 23.3068 10.0909 25.301 13.8323C28.0929 19.0701 29.2894 29.5458 13.7346 22.8114Z"
          stroke="#181CCE" />`,
    },
    {
      name: 'x',
      value: `
          <path d="M17 0V35" stroke="#CCCCCC" />
          <path d="M0 17L35 17" stroke="#CCCCCC" />
          <path
              d="M29.216 9C23.5972 19.5644 1.35625 34.0002 6.8717 17.5658C11.1838 4.71715 22.194 13.258 30 23.3858"
              stroke="#FF0000" />
  `,
    },
    {
      name: 'square',
      value: `
      <path d="M17 0V35" stroke="#CCCCCC" />
      <path d="M0 17L35 17" stroke="#CCCCCC" />`,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.findIcon();
  }

  private findIcon() {
    this.currentIcon =
      this.listIcon.find((icon) => icon.name === this.iconName) || null;
  }
}
