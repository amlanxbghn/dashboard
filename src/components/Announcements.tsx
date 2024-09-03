

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-gray-400 text-xs">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-dashboardSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
                        2025-01-01
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugiat suscipit deleniti.
                </p>
            </div>
            <div className="bg-dashboardPurpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
                        2025-01-01
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum vero mollitia.
                </p>
            </div>
            <div className="bg-dashboardYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
                        2025-01-01
                    </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus animi libero iste?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Announcements