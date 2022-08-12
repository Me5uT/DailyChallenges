interface IBookModel {
  id: string;
  name: string;
  date: Date;
  author: {
    id: string;
    name: string;
  };
}

const findDifferences = (
  firstBookList: IBookModel[],
  secondBookList: IBookModel[]
) => {
  let sameBooksList: IBookModel[] = [];
  let inJustFirstBooksList: IBookModel[] = [];
  let inJustSecondBooksList: IBookModel[] = [];

  // for in just first book list and for same books with second book list
  for (let firstIndex = 0; firstIndex < firstBookList.length; firstIndex++) {
    // same book flag
    let isSameBook: boolean = false;

    for (
      let secondIndex = 0;
      secondIndex < secondBookList.length;
      secondIndex++
    ) {
      // if same
      if (firstBookList[firstIndex].id == secondBookList[secondIndex].id) {
        isSameBook = true;
        sameBooksList.push(firstBookList[firstIndex]);
        break;
      }
    }

    // in just first book list
    if (!isSameBook) {
      inJustFirstBooksList.push(firstBookList[firstIndex]);
    }
  }

  // for in just second book list
  for (let i = 0; i < secondBookList.length; i++) {
    // same book flag
    let isSameBook: boolean = false;

    for (let j = 0; j < firstBookList.length; j++) {
      // if same
      if (firstBookList[j].id == secondBookList[i].id) {
        isSameBook = true;

        break;
      }
    }

    // in just first book list
    if (!isSameBook) {
      inJustSecondBooksList.push(secondBookList[i]);
    }
  }

  console.log("inJustFirstBooksList", inJustFirstBooksList);
  console.log("inJustSecondBooksList", inJustSecondBooksList);
  console.log("sameBooksList", sameBooksList);
};

const bookListOne: IBookModel[] = [
  {
    id: "1",
    name: "Suc Ve Ceza",
    date: new Date(),
    author: {
      id: "11",
      name: "Fyodor Dostoyevski",
    },
  },
  {
    id: "2",
    name: "Sefiller",
    date: new Date(),
    author: {
      id: "12",
      name: "Victor Hugo",
    },
  },
  {
    id: "3",
    name: "Vadideki Zambak",
    date: new Date(),
    author: {
      id: "13",
      name: "Honoré de Balzac",
    },
  },
  {
    id: "4",
    name: "Romeo ve Juliet",
    date: new Date(),
    author: {
      id: "14",
      name: "William Shakespeare",
    },
  },
];

const bookListTwo: IBookModel[] = [
  {
    id: "5",
    name: "İlahi Komedya",
    date: new Date(),
    author: {
      id: "15",
      name: "Dante Alighieri",
    },
  },
  {
    id: "2",
    name: "Sefiller",
    date: new Date(),
    author: {
      id: "12",
      name: "Victor Hugo",
    },
  },
  {
    id: "3",
    name: "Vadideki Zambak",
    date: new Date(),
    author: {
      id: "13",
      name: "Honoré de Balzac",
    },
  },
  {
    id: "6",
    name: "Aşk ve Gurur",
    date: new Date(),
    author: {
      id: "16",
      name: "Jane Austen",
    },
  },
];

findDifferences(bookListOne, bookListTwo);
