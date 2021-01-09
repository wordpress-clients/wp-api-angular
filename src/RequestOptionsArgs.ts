
type RequestMethod = "get" | "post" | "put" | "delete";

export class RequestOptionsArgs {
  url : string
  method : string|RequestMethod
  search : string|URLSearchParams
  headers : Headers
  body : any
  withCredentials : boolean
}
