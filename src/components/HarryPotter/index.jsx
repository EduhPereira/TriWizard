import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HarryPotter = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="HarryPotter">
      <h1 className="section__title" data-aos="fade-in">
        harry potter
      </h1>

      <div className="resume" data-aos="fade-right">
        <h2 className="title">what is it about</h2>
        <div className="container">
          <div className="container__col-1">
            <p className="paragraph">
              Harry Potter is a series of seven fantasy novels written by
              British author J. K. Rowling. The novels chronicle the lives of a
              young wizard, Harry Potter, and his friends Hermione Granger and
              Ron Weasley, all of whom are students at Hogwarts School of
              Witchcraft and Wizardry. The main story arc concerns Harry's
              struggle against Lord Voldemort, a dark wizard who intends to
              become immortal, overthrow the wizard governing body known as the
              Ministry of Magic and subjugate all wizards and Muggles
              (non-magical people).
            </p>
            <p className="paragraph">
              Since the release of the first novel, Harry Potter and the
              Philosopher's Stone, on 26 June 1997, the books have found immense
              popularity, positive reviews, and commercial success worldwide.
              They have attracted a wide adult audience as well as younger
              readers and are often considered cornerstones of modern young
              adult literature.[2] As of February 2018, the books have sold more
              than 500 million copies worldwide, making them the best-selling
              book series in history, and have been translated into eighty
              languages.[3] The last four books consecutively set records as the
              fastest-selling books in history, with the final instalment
              selling roughly eleven million copies in the United States within
              twenty-four hours of its release.
            </p>
            <p className="paragraph">
              The series was originally published in English by two major
              publishers, Bloomsbury in the United Kingdom and Scholastic Press
              in the United States. A play, Harry Potter and the Cursed Child,
              based on a story co-written by Rowling, premiered in London on 30
              July 2016 at the Palace Theatre, and its script was published by
              Little, Brown. The original seven books were adapted into an
              eight-part namesake film series by Warner Bros. Pictures, which is
              the third highest-grossing film series of all time as of February
              2020. In 2016, the total value of the Harry Potter franchise was
              estimated at $25 billion,[4] making Harry Potter one of the
              highest-grossing media franchises of all time.
            </p>
          </div>
          <div className="container__col-2">
            <img
              className="image"
              src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/04/harrypotter.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="author" data-aos="fade-left">
        <h2 className="title">about j. k. rowling</h2>
        <div className="container">
          <div className="container__col-2">
            <img
              className="image"
              src="https://s2.glbimg.com/XsbfFRDdcLdvQyLaQPsvHvbAYvs=/e.glbimg.com/og/ed/f/original/2020/11/10/50414449_1979923558782917_748461144397578240_o.jpg"
              alt=""
            />
          </div>

          <div className="container__col-1 adjust">
            <p className="paragraph">
              Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;
              born 31 July 1965), better known by her pen name J. K. Rowling, is
              a British author, philanthropist, film producer, television
              producer, and screenwriter. She is best known for writing the
              Harry Potter fantasy series, which has won multiple awards and
              sold more than 500 million copies, becoming the best-selling book
              series in history. The books are the basis of a popular film
              series, over which Rowling had overall approval on the scripts and
              was a producer on the final films. She also writes crime fiction
              under the pen name Robert Galbraith.
            </p>
            <p className="paragraph">
              Born in Yate, Gloucestershire, Rowling was working as a researcher
              and bilingual secretary for Amnesty International in 1990 when she
              conceived the idea for the Harry Potter series while on a delayed
              train from Manchester to London. The seven-year period that
              followed saw the death of her mother, birth of her first child,
              divorce from her first husband, and relative poverty until the
              first novel in the series, Harry Potter and the Philosopher's
              Stone, was published in 1997. There were six sequels, of which the
              last was released in 2007. Since then, Rowling has written several
              books for adult readers: The Casual Vacancy (2012) and—under the
              pseudonym Robert Galbraith—the crime fiction Cormoran Strike
              series. In 2020, her "political fairytale" for children, The
              Ickabog, was released in instalments in an online version.
            </p>
            <p className="paragraph">
              A series of many genres, including fantasy, drama, coming of age,
              and the British school story (which includes elements of mystery,
              thriller, adventure, horror, and romance), the world of Harry
              Potter explores numerous themes and includes many cultural
              meanings and references.[5] According to Rowling, the main theme
              is death.[6] Other major themes in the series include prejudice,
              corruption, and madness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
