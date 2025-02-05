export interface Weather{
  cord:{
    lat:number,
    lon:number,
  },
  weather:[
    {
      id:number,
      main:string,
      description:string,
      icon:string
   }
  ],
  base:string,
  main:{
    temp:number,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    pressure:number,
    humidity:number,
  },
  visibility:number,
  wind:{
    speed:number,
    deg:number,
  },
  sys:{
    type:string,
    id:number,
    country:string,
    sunrise:number,
    sunset:number
  },
  timezone:number,
  id:number,
  name:string,
  cod:number


}

