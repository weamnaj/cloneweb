import "./SectionsListStyle.css";
function SectionsList() {
  return (
    <>
      <aside>
        <ul style={{ listStyle: "none" }}>
          <li className="mainLi">
            {" "}
            <a href="">تشكيلات جديدة</a>
            <ul className="sub" style={{ listStyle: "none" }}>
              <li>
                <a href="#">اظهار الكل</a>
              </li>
              <li>
                <a href="#">الملابس</a>
              </li>
              <li>
                <a href="">الأحذية والإكسسوارات</a>
              </li>
              <li>
                <a href="">ملابس السباحة</a>
              </li>
              <li>
                <a href="">الملابس الرياضية</a>
              </li>
            </ul>
          </li>

          <li className="mainLi">
            <a href="">أهم العروض</a>
            <ul className="sub" style={{ listStyle: "none" }}>
              <li>
                <a href="#">الأكثر مبيعا</a>
              </li>
            </ul>
          </li>
          <li className="mainLi">
            <a href="#">الرائج الآن</a>

            <ul className="sub" style={{ listStyle: "none" }}>
              <li>
                <a href="#"> راحة فاخرة</a>
              </li>
              <li>
                <a href="#">رابان واتش اند ام </a>
              </li>
              <li>
                <a href="#">تصاميم عصرية </a>
              </li>
              <li>
                <a href="#">قسم تصاميم العطلات </a>
              </li>
              <li>
                <a href="#">Style inspiration </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SectionsList;
