import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";
import * as FusionCharts from "fusioncharts";
import {firstValueFrom, map, Observable, of, Subject, tap} from "rxjs";
import {SMAProperties} from "../api";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {
  isLoading: boolean;
  items: [];
  cols: [{ field: string; header: string }, { field: string; header: string }];
  indicator!: string;
  dataSource: any;
  type: string;
  width: string;
  height: string;
  selectedProducts: any;
  dropdownIntervalItem: string = 'daily';
  dropdownTimePeriodItem: number = 200;
  dropdownSymbolItem: string = 'UA';
  dropdownSeriesTypeItem: string = 'Open';
  dropdownSymbolItems: string[] = ['UA', 'USA', 'QAT', 'JPN', 'GBR', 'PL', 'CAN', 'CHN', 'NASA', 'AT&T'];
  dropdownTimePeriodItems: number[] = [5, 10, 20, 30, 40, 50, 100, 200, 300, 400, 500];
  dropdownIntervalItems: string[] = ['1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly'];
  dropdownSeriesTypeItems: string[] = ['Open', 'Close', 'High', 'Low'];

  constructor(private readonly route: ActivatedRoute, private readonly api: ApiService,
              private readonly messageService: MessageService) {
  }

  ngOnInit(): void {

    this.indicator = this.route.snapshot.params['indicator'];

    this.cols = [
      {field: 'code', header: 'Code'},
      {field: 'name', header: 'Name'},
    ];

    this.type = "timeseries";
    this.width = "100%";
    this.height = "400";

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
    this.fetchData({
      symbol: this.dropdownSymbolItem,
      timePeriod: this.dropdownTimePeriodItem,
      seriesType: this.dropdownSeriesTypeItem,
      interval: this.dropdownIntervalItem,
    })
      .then(r => r);
  }

  async fetchData(sma: SMAProperties) {
    const resolve = (await firstValueFrom(this.api.getSMAByProps(sma)));
    // @ts-ignore
    const getValues = Object.entries(resolve['Technical Analysis: SMA'])
      .map((response: any) => {
        return [new Date(response[0]).toISOString(), response[1].SMA]
      })

    // function checkIsArrayEmpty(key: number) {
    //   return getValues.map(arr => {
    //     if (Array.isArray(arr[key])) {
    //       return this.messageService.add({summary: 'Successfully Data Content'})
    //     }
    //   })
    // }

    console.log(getValues);
    const fusionDataStore = new FusionCharts.DataStore();
    // @ts-ignore
    this.dataSource.data = fusionDataStore.createDataTable(getValues, [{
      "name": "Time",
      "type": "date",
    }, {
      "name": "(SMA) Value",
      "type": "number"
    }]);
  }

  async getSMAProperties() {
    this.isLoading = true;
    await this.fetchData({
      symbol: this.dropdownSymbolItem,
      timePeriod: this.dropdownTimePeriodItem,
      seriesType: this.dropdownSeriesTypeItem,
      interval: this.dropdownIntervalItem,
    });
    this.isLoading = false;
  }
}
