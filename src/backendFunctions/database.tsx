const slotData: {
  id: number;
  status: "Empty" | "Booked";
  isEmpty: boolean;
  time: any;
  name?: string;
  phone?: string;
}[] = [
  {
    id: 1,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 2,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 3,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 4,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 5,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 6,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 7,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 8,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 9,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 10,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 11,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
  {
    id: 12,
    status: "Empty",
    isEmpty: true,
    time: Date.now(),
  },
];

// export function setSlotData() {
//   Array.from({ length: 12 }).map((data, index) => {
//     slotData.push({
//       id: index,
//       status: "Empty",
//       isEmpty: true,
//       time: Date.now(),
//     });
//   });
// }

// if (slotData.length === 0) {
//   setSlotData();
// }

export function getSlotDetails() {
  return [...slotData];
}

export function bookSlot(name: string, phone: string) {
  let count = 0;
  for (let data of slotData) {
    if (data.isEmpty) {
      count += 1;
    }
  }
  if (count > 0) {
    for (let data of slotData) {
      if (data.isEmpty) {
        data.isEmpty = false;
        data.status = "Booked";
        data.name = name;
        data.phone = phone;
        break;
      }
    }
  }
  return count === 0
    ? { message: "Parking is full.", error: true }
    : { message: "Booking Sucessful.", error: false };
}

export function changeSlotStatus(id: string) {
  for (let data of slotData) {
    if (data.id === parseInt(id)) {
      data.isEmpty = true;
      data.status = "Empty";
      return {
        error: false,
        message: "Sucessfully updated Booking Info.",
      };
    }
  }
  return {
    error: true,
    message: "Failed to update booking Status.",
  };
}

export function changeSlotStatusFromEmpty(id: string) {
  for (let data of slotData) {
    if (data.id === parseInt(id)) {
      data.isEmpty = false;
      data.status = "Booked";
      data.name = Math.floor(Math.random() * 100000).toString();
      data.phone = Math.floor(Math.random() * 1000000000).toString();
      return {
        error: false,
        message: "Sucessfully updated Booking Info.",
      };
    }
  }
  return {
    error: true,
    message: "Failed to update booking Status.",
  };
}
