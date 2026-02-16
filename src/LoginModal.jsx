export default function LoginModal({ isLoginOpen, onClose, switchToSignup }) {
  const displayLogin = isLoginOpen && (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-8 rounded-xl shadow-2xl w-96 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            Login to Dersual
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />
            <button className="bg-[#D17557] text-white py-2 rounded font-bold hover:bg-[#b56148]">
              Log In
            </button>
            <div className="text-right">
              <a
                href="#"
                className="text-xs text-slate-500 hover:text-orange-400 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <hr className="my-2 border-slate-100" />

            <p className="text-sm text-center text-slate-600">
              Don't have an account?{" "}
              <a href="#" onClick={switchToSignup} className="font-bold text-orange-400 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
    return displayLogin
  
}
