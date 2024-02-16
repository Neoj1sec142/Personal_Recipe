import { FoodStyle } from "../models/food-style.model";

export const stylesToSeed: FoodStyle[] = [
          {name: "Russian", description: "Russki yeda"},
          {name: "Italian", description: "Italian Food"},
          {name: "Mexican", description: "Mexican Styled Food."},
          {name: "French", description: "French Plates and not Fries"},
          {name: "Mediteranian", description: "Greek Food Styles and other Mediteranian"},
          {name: "Turkish", description: "Turkish Food Styles"},
          {name: "Danish", description: "Danish Styled Food"},
          {name: "Swedish", description: "Sweedish Styled Dishes"},
          {name: "German", description: "Styled plates from Gremany"},
          {name: "Irish", description: "Styled plates from Ireland"},
          {name: "Indian", description: "Indian Styled Food. (Buddhist/Hindu)"},
          {name: "Japanese", description: "Styles of Japanese Food"},
          {name: "Indonesian", description: "Indonesian Island Style Foods"},
          {name: "Thai", description: "Food Style from Thailand"},
          {name: "Mandarin", description: "Food from Chinese styles"},
        ]

// addStyles(){
//     const stylesToSeed: FoodStyle[] = [
//       {name: "Russian", description: "Russki yeda"},
//       {name: "Italian", description: "Italian Food"},
//       {name: "Mexican", description: "Mexican Styled Food."},
//       {name: "French", description: "French Plates and not Fries"},
//       {name: "Mediteranian", description: "Greek Food Styles and other Mediteranian"},
//       {name: "Turkish", description: "Turkish Food Styles"},
//       {name: "Danish", description: "Danish Styled Food"},
//       {name: "Swedish", description: "Sweedish Styled Dishes"},
//       {name: "German", description: "Styled plates from Gremany"},
//       {name: "Irish", description: "Styled plates from Ireland"},
//       {name: "Indian", description: "Indian Styled Food. (Buddhist/Hindu)"},
//       {name: "Japanese", description: "Styles of Japanese Food"},
//       {name: "Indonesian", description: "Indonesian Island Style Foods"},
//       {name: "Thai", description: "Food Style from Thailand"},
//       {name: "Mandarin", description: "Food from Chinese styles"},
//     ]
//     let observables: Observable<any>[] = [];
//     stylesToSeed.forEach((style: FoodStyle) => {
//       observables.push(this.styleSvc.create(style))
//     })
//     forkJoin(observables).subscribe((res: any) => {
//       console.log(res, "Success")
//     })
//   }