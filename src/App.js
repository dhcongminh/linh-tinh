import { Container } from "react-bootstrap";
import "./App.css";
import API from "./api/API";
import Loading from "./components/Loading";
import { useState } from "react";

function App() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const handleSent = () => {
    setIsLoading(true);
    const food = {
      name: inputValue && inputValue.trim() !== "" ? inputValue : selectedFood,
      createdAt: new Date(Date.now()).toString(),
    };
    API.addFood(food).then((food) => {
      setIsLoading(false);
      setIsDone(true);
    });
  };
  return (
    <div className="App">
      <Loading isLoading={isLoading} />
      {!isDone ? (
        <Container>
          <div id="main">
            <div>
              <h3 className="header">???</h3>
            </div>
            {(inputValue && inputValue.trim() !== "") || (
              <div className="row">
                <div
                  onClick={() => setSelectedFood("banh mi chao")}
                  className={`col-md-4 example-food__container ${
                    selectedFood === "banh mi chao" && "selected"
                  }`}
                >
                  <img
                    className="w-100 example-food"
                    src="https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202306/Images/cach-lam-banh-mi-chao-tai-nha-cho-bua-sang-giau-dinh-duong-20230605021648-e.jpg"
                    alt="banh mi chao"
                  />
                </div>
                <div
                  onClick={() => setSelectedFood("my cay")}
                  className={`col-md-4 example-food__container ${
                    selectedFood === "my cay" && "selected"
                  }`}
                >
                  <img
                    className="w-100 example-food"
                    src="https://cdn.tgdd.vn/Files/2019/09/24/1201263/2-cach-nau-mi-cay-hai-san-chuan-cong-thuc-han-quoc-202112301425006195.jpg"
                    alt="my cay"
                  />
                </div>
                <div
                  onClick={() => setSelectedFood("bun bo")}
                  className={`col-md-4 example-food__container ${
                    selectedFood === "bun bo" && "selected"
                  }`}
                >
                  <img
                    className="w-100 example-food"
                    src="https://file.hstatic.net/200000395159/article/nau-bun-bo-hue-chuan-vi-tai-nha-voi-cot-co-dac-quoc-viet-foods_59b7ba1543004e67967af718d8afc32b.jpg"
                    alt="bun bo"
                  />
                </div>
              </div>
            )}
            <div>
              <h3>ĂN CỨT KHONG ???</h3>
              ko thì ăn cái khác:{" "}
              <input
                className="form-control mb-5"
                onInput={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary btn-lg" onClick={handleSent}>
                GỬI CHO ANH MINH <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </Container>
      ) : (
        <div className="text-center p-5">
          <h3>OK NHES</h3>
          hôm nào Long khỏi ốm thì đi chơi
        </div>
      )}
    </div>
  );
}

export default App;
