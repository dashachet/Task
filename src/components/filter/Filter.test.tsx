test("should take old men older than 90", ()=> {
    const ages = [15, 20, 68, 70, 2, 22, 89, 33];

    const predicate = (age: number) => age > 90;
    
    const oldAges = ages.filter((age) => age > 90) ;
        
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test("should take cheap courses", () => {

    type CourseType = {
        title: string
        price: number
    }

    const CheapCouses = (course: CourseType) =>  course.price < 160;

    const courses = [{ title: "css", price: 100 },
    { title: "html", price: 200 },
    { title: "JS", price: 1000 }];

    const CheapestCourses = courses.filter((course) => course.price < 160);

    expect(CheapestCourses.length).toBe(1);
    expect(CheapestCourses[0].title).toBeX("css");
})