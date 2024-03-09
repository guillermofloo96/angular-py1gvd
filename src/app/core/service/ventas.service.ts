import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { VentasDto } from '../dto/ventasdto';



@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private apiUrl: string= environment.apiUrl;

  constructor(private http:HttpClient) {}

  public getVentas(): Observable<any>{
    const token ='eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5c';

    // Configura los encabezados
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.apiUrl+"api/Test/getVentas", {headers})
  }


    




}