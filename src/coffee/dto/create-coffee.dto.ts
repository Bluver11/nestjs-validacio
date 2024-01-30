import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsNumber, IsPositive, Matches, Max, isDefined } from "class-validator";

export class CreateCoffeeDto {

  @IsNotEmpty({message : 'A név megadása kötelező'})
  name:string;

  @IsDefined({message:'Az ár megadása kötelező'})
  @IsPositive()
  @IsInt()
  price:number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  @Max(100,{message:'A koffein tartalom max 100 lehet'})
  caffeine:number;




  @IsDefined()
  @IsDateString()
  processedDate: string;
  
  
  
  @IsDefined()
  @Matches(/^[A-Z]{4}[0-9]{2}$/)
  productCode: string;
}
