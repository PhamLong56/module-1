let rat1=new Rat('Jerry',0.5,10);
let cat1=new Cat('Tom',4,15);

cat1.meow()
rat1.chikchik()
if(cat1.catchRat(rat1)){
    cat1.eatRat(rat1);
}
cat1.eatRat(rat1);