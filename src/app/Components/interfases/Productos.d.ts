export interface Producto{
    id:string;
    site_id:string;
    title:string;
    price:number;
    seller_id:number;
    use_thumbnail_id: boolean;
    category_id?: string;
    official_store_id: number;
    base_price: number;
    sold_quantity:number;
    warranty: string;
    thumbnail: string;      
    accepts_mercadopago: boolean | string;
    available_quantity: number;
    address: any;
    seller_address:{
      id: number,
    }
    pictures:[
      {
        url:any
      },
      {
        url:any
      },
      {
        url:any
      },
      {
        url:any  
      },
      {
        url:any
      },
      {
        url:any
      },
    ]
    attributes:[
        {
          value_id:number
          name:string
          value_name:string
        }
    ]
}
export interface ResponseProducto{
    site_id:string;
    query:string;
    paging: {
      total: number;
      primary_results: number;
      offset: number;
      limit: number;
    },
    

    results:Producto[]
}