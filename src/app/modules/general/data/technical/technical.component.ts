import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import * as FusionCharts from "fusioncharts";
import {firstValueFrom} from "rxjs";
import {SMA} from "../api";

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
  items!: any[];
  cols!: any[];
  indicator!: string;
  dataSource: any;
  type!: string;
  width!: string;
  height!: string;
  selectedProducts: any;
  selectItem: any;

  constructor(private readonly route: ActivatedRoute, private readonly api: ApiService) {
  }

  ngOnInit(): void {
    this.indicator = this.route.snapshot.params['indicator'];
    this.type = "timeseries";
    this.width = "100%";
    this.height = "400";

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
    ];

    this.dataSource = {
      chart: {},
      caption: {
        text: "The Simple Moving average (SMA) Value Analysis"
      },
      subcaption: {
        text: "Grocery"
      },
      yaxis: [
        {
          plot: {
            value: "(SMA) value"
          },
          format: {
            prefix: "$"
          },
          title: "а"
        }
      ]
    };
    this.fetchData().then(r => r);
  }

  async fetchData() {
    const resolve = (await firstValueFrom(this.api.getSMA()));
    const getValues = Object.entries(resolve["Technical Analysis: SMA"])
      .map(value => [value[0], Number(value[1].SMA)])

    const fusionDataStore = new FusionCharts.DataStore();
    this.dataSource.data = fusionDataStore.createDataTable(getValues, [{
      "name": "Time",
      "type": "date",
      "format": "%Y-%m-%d"
    }, {
      "name": "(SMA) Value",
      "type": "number"
    }]);
  }

  filterSMAProps(symbol: SMA, timePeriod: SMA, seriesType: SMA, interval: SMA) {
    return this.api.getSMAByProps();
  }
}
