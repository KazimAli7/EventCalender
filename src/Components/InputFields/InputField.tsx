function Input() {
  return (
    <input
              id="password"
              type="text"
              name="password"
            //   value={}
            //   onChange={(e) => handleChange('password', e.target.value)}
              placeholder="password"
              autoComplete="current-password"
              className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
            />
  );
}

export default Input;
