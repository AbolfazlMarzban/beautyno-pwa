import profile from "../../assets/images/background.png";

export default function FavItem({}) {
  return (
    <div className="w-full border border-1 rounded-xl p-2 px-6 my-4">
      <ul className="flex items-center justify-between ">
        <li>
          <div
            className="h-16 w-16 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
        </li>
        <li>
          <span className="text-lg">اسم آرایشگر</span>
        </li>
        <li>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded-xl shadow flex gap-x-2">
            لیست خدمات
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
              />
            </svg>
          </button>
        </li>
        <li>
          <span className="text-lg">روز دوشنبه 1402/5/27</span>
        </li>
        <li>
          <span className="text-lg">از ساعت 6 الی 8</span>
        </li>
      </ul>
    </div>
  );
}
