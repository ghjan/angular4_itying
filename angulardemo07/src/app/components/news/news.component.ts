import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = '你好angular4.x(news)';
  public list: any[];
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  isLocal = false;

  constructor(private http: HttpClient, private jsonp: Jsonp) {

  }

  ngOnInit() {
  }

  requestData() {

    // alert('请求数据');
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
    this.http.get(url).subscribe((data) => {


      this.list = data['result'];


    }, function (err) {

      console.log(err);
    });
  }


  requestJsonpData(isLocal: boolean) {

    this.isLocal = isLocal;
    // jsonp 必须得在url加回到  &callback=JSONP_CALLBACK
    let url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK';
    if (isLocal) {
      url = 'http://127.0.0.1:3000/news?&callback=JSONP_CALLBACK';
    }


    this.jsonp.get(url).subscribe((data) => {
      if (this.isLocal) {

        console.log(data['_body']);
      } else {
        this.list = data['_body']['result'];
      }


    }, function (err) {

      console.log(err);
    });
  }

  postData() {

    // 1.import { Http,Jsonp,Headers } from '@angular/http';   Headers 定义请求头的

    // 2.private headers = new Headers({'Content-Type': 'application/json'});


    // 3.post提交数据

    const url = 'http://127.0.0.1:3000/dologin';


    this.http.post(url,
      JSON.stringify({'username': 'zhangsan', 'age': '20'}),
      {headers: this.headers}).subscribe(function (data) {

      console.log(data);


    }, function (error) {

      console.log(error);
    });


  }

}
