import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            let withKeyReq = req.clone({
                setParams: {
                    key: env.BASE_API_KEY
                }
            })

        return next.handle(withKeyReq);
    }
}