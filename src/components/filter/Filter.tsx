const ages = [15, 20, 68, 70, 2 , 22, 89, 33];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses = [ {title: "css", price: 100},
    {title: "html", price: 200}, 
    {title: "JS", price: 1000}];


const CheapCouses = (course: CourseType) => {
    return course.price < 160;
}

const CheapestCourses = [{ title: "css", price: 100 }]