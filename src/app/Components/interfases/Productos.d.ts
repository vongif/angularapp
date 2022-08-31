export interface Producto{
    id:number;
    permalink: any;
    seller:{
      permalink:any;
    },
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
    condition:string;
    sale_terms:[{
      name:string;
      value_name:string;
    }]
    seller_address:{
      city:{
        name:string;
      }
      state:{
        name:string;
      },
    },
    address: {
      state_id:any;
      state_name:string;
      city_id: string | number;
      city_name: string;
    },
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
    ],
    attributes:[
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string}, 
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string}, 
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string}, 
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string},
        {name:string,value_name:string}, 
        {name:string,value_name:string},
        {name:string,value_name:string},    
    ],
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