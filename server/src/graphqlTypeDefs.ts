export const defs = `
type  Query {
  hello : String,
  booktopdata (id:Int,limit:Int):[Category],
  goodbookdata (id:Int): [Food],
  category(id:Int):[BigCategory],
  lowPricedata:[pricedata]
}
type pricedata{
  id:Int,
  path:String,
  title:String,
  writer:String,
  writername:String,
  copyright:String,
  copyrightname:String,
  nowprice:Float,
  preprice:Float,
  buy:String
}
type BigCategory{
  id:Int,
  name:String,
  path:String,
  smallCategory(title:String):[SmallCategory]
}
type SmallCategory{
  id:Int,
  path:String,
  title:String,
  writer:String,
  writername:String,
  copyright:String,
  copyrightname:String,
  nowprice:Float,
  preprice:Float,
  buy:String 
}
type Category{
  id:Int,
  name:String,
  path:String,
  price:Float
}
type Food{
  id:Int,
  path:String,
  title:String,
  writer:String,
  writername:String,
  copyright:String,
  copyrightname:String,
  nowprice:Float,
  preprice:Float,
  buy:String
}
`