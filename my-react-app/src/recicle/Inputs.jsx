const Input = ({ label, type, register, error, readOnly }) => {
    return (
        <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                readOnly={readOnly}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                {...register}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
        </div>
    );
};

export default Input;
