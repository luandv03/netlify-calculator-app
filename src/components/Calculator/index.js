import classnames from "classnames/bind";
import styles from "./Calculator.module.scss";
import { useState } from "react";

const cx = classnames.bind(styles);

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };

  const handleResult = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("#Error");
    }
  };

  const handleClear = () => {
    setResult("");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("value")}>
          <input type="text" value={result} />
        </div>

        <div className={cx("keyboard")}>
          <button className={cx("highlight")} onClick={() => handleClear()}>
            Clear
          </button>
          <button className={cx("highlight")} onClick={() => handleBackSpace()}>
            C
          </button>
          <button name="/" className={cx("highlight")} onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" className={cx("highlight")} onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" className={cx("highlight")} onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" className={cx("highlight")} onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." className={cx("highlight")} onClick={handleClick}>
            .
          </button>
          <button className={cx("highlight")} onClick={() => handleResult()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
