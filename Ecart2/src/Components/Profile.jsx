import React from 'react';

const Profile = () => {
 
    
  const user = {
    Name: 'Karunansh Swaroop',
    email: 'karunansh@example.com',
    address: '123, Main Street, City, Country',
    phone: '+91 1234567890',
    recentOrders: [
      { id: '1', item: 'Wireless Headphones', date: '2024-08-15', status: 'Delivered' },
      { id: '2', item: 'Smart Watch', date: '2024-08-10', status: 'Shipped' },
      { id: '3', item: 'Laptop Stand', date: '2024-08-05', status: 'Delivered' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center py-12">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        {/* Profile Header */}
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-md"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Account Info Section */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-3">Account Information</h3>
          <div className="text-gray-700">
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div>
          <h3 className="text-xl font-medium mb-3">Recent Orders</h3>
          <ul className="space-y-4">
            {user.recentOrders.map((order) => (
              <li key={order.id} className="bg-gray-50 p-4 rounded-md shadow">
                <p className="font-semibold">{order.item}</p>
                <p className="text-gray-600">Date: {order.date}</p>
                <p className="text-gray-600">Status: {order.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
