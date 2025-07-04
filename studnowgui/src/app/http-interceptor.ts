import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = sessionStorage.getItem('userinfo') ? JSON.parse(sessionStorage.getItem('userinfo')!).token
    : null;
  console.log("token value in interceptor", token);
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  return next(req);
};