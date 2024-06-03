const double =(n) => {
  return n*2
};
console.log(double(3))

const marks=[8,9,2,3,4]
for(let i=0;i<marks.length;i++){
    console.log("i :" ,i, "marks: ",marks[i])
}
for (let j in marks){
    console.log("Index: ",j,"marks: ",marks[j])
}

// readable and cleaner
for (let mark of marks){
    console.log("marks: ",mark)
}


const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];
  
  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];
  
  //   Ex 1.1: Combine cart + newItems
  
  for (let item of cart) {
  }
  
  // Ex 1.2: Find total of cart
  
  //1.1
  const cart1=[...cart, ...newItems];
  console.log(cart1);

  var sum=0;
  var p=1;
  for(i in cart1)
    {
      p=cart1[i].price*cart1[i].quantity;
      sum+=p;
    }

console.log(sum);


  var s=0;
  var pp=0;
  for(let i of cart1)
    {
       p=i.price*i.quantity;
       s+=p;
    }
    console.log(s)
  
var sum_f=0;
    const [,pq,q]=[...cart1];
    for(let i of cart1)
      {
        p=pq*q;
        sum_f+=p;
      }
console.log(sum_f)
  //1.2
  var sum=0;
  var p=1;
  for(let i=0;i<cart1.length;i++)
    {
            p=1 
                p=cart1[i].price*cart1[i].quantity;
            sum+=p;
    }
 console.log(sum)
   
 // with for of loop
 var total=0;
 var p1=1;
 for(let item of cart1)
    {
        p=item.price*item.quantity
        total+=p;
    }
  console.log(total);
 

  // destructured answer

  var total_f=0;
   p=1;
  for(let item of cart1)
     {
      var {price,quantity}=item;
         total_f+=price*quantity;
     }
   console.log("after destructuing: ",total_f);
   
   //
   var total_f=0;
   p=1;
  for(let {price,quantity} of cart1)
     {
         total_f+=price*quantity;
     }
   console.log("after destructuing even more: ",total_f);

  //1.2

 // Ex 2: Rating 4.7 and above | Recommendations List
const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
  
//   Output
//   ['A Brief History of Time', 'Clean Code', 'Sapiens' ]



var output=[];
for(let i of books)
  {
    if(i.rating>=4.7)
      output.push(i.title);
  }
  console.log(output)


  var output=[];
   for(let i=0;i<books.length;i++)
    {
        if(books[i].rating>=4.7)
            output.push(books[i].title);
    }
    console.log(output)


    // Ex 3: If employee's grades 80 or above promote them
const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  // This should output:
  // [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
   let output1=[];
  for(let employee of employes)
    {
        if(employee.grade>80)
            {
               output1.push({
                id: employee.id ,
                 status: "promoted"});
            }
    }
    console.log(output1);


   var output_f=[]
   for(let item of employes)
    {
      if(item.grade>=80)
        {
          output_f.push({
            id: "item.id",status:"promoted"
          }
          )
        }
    }
    console.log(output_f);

// Ex4: Top 2 movie titles

const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
  
  // Expected Output:  The Dark Knight and Inception
  var sum1=0;
  var a;
  var high=0;
  var avg=0;
  for(let i=0;i<movies.length;i++)
    {
        //console.log(sum_s(movies[9]))
      for(let j=0;j<movies[i].ratings.length;j++)
        {
            sum1+=movies[i].ratings[j];
            avg=sum1/5

            if(high<avg)
                {
                 // low=high;
                    high=avg;
                    a=movies[i].title
                }
        }
        sum1=0;
        
    }
  console.log(a)
