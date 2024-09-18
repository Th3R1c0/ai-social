"use client";

const Conversations = () => {
  const userMessages = [
    {
      name: "John Doe",
      message: "Hey there! How's your day going?",
      sent: "2m",
      gradient: "from-red-500 to-yellow-500",
    },
    {
      name: "Jane Smith",
      message:
        "Welcome to Belone!!!! pleasse message me when you have the time",
      sent: "10m",
      gradient: "from-green-500 to-blue-500",
    },
    {
      name: "Michael Johnson",
      message: "Hello! Let me know if you have any questions.",
      sent: "30m",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Emily Brown",
      message: "Hey! I'm just a message away if you need anything.",
      sent: "1h",
      gradient: "from-blue-500 to-teal-500",
    },
  ];

  return (
    <div>
      <div className="flex flex-col h-max ">
        {userMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex space-x-4 h-max w-full py-6 px-2 border-b-2  border-b-gray-400 `}
            onClick={() =>
              alert("please upgrade to belone pro to access conversations")
            }
          >
            <div
              className={`w-[70px] rounded-full ${msg.gradient} bg-gradient-to-r h-[70px]`}
            ></div>
            <div className="flex flex-col flex-1 space-y-2 text-2xl font-bold text-left truncate">
              <h3>{msg.name}</h3>
              <p className="truncate">{msg.message}</p>
            </div>
            <div className="flex space-x-2 text-2xl text-gray-400 ">
              <span>{msg.sent}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-max p-8 font-bold text-2xl items-center flex justify-center text-gray-400">
        refresh
      </div>
    </div>
  );
};

export default Conversations;
