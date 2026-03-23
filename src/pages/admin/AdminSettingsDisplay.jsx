import { useState, useRef  } from "react";
import { sileo } from "sileo";


const AdminSettingsDisplay = () => {
  const [selected, setSelected] = useState("light");

  const [heroImage, setHeroImage] = useState(null);
  const [authImage, setAuthImage] = useState(null);
  const [isDraggingHero, setIsDraggingHero] = useState(false);
  const [isDraggingAuth, setIsDraggingAuth] = useState(false);
  const heroFileInputRef = useRef(null);
  const authFileInputRef = useRef(null);

  // Mock image data - you can replace this with fetched data later
  const mockImages = [
    { id: 1, url: 'https://picsum.photos/id/1015/800/600', name: 'Mountain Landscape' },
    { id: 2, url: 'https://picsum.photos/id/104/800/600', name: 'Waterfall' },
    { id: 3, url: 'https://picsum.photos/id/169/800/600', name: 'Sunset Beach' },
  ];

  // For demo, set first mock image as initial hero image
  useState(() => {
    setHeroImage(mockImages[0]);
    setAuthImage(mockImages[1]);
  }, []);

  const handleDragOver = (setDragging) => (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (setDragging) => (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (setDragging, setImage, isLocal = true) => (e) => {
    e.preventDefault();
    setDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = {
        id: Date.now(),
        url: imageUrl,
        name: file.name,
        isLocal: true
      };
      setImage(newImage);
    }
  };

  const handleFileSelect = (setImage) => (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = {
        id: Date.now(),
        url: imageUrl,
        name: file.name,
        isLocal: true
      };
      setImage(newImage);
    }
  };

  const removeImage = (setImage, image) => () => {
    if (image?.isLocal) {
      URL.revokeObjectURL(image.url);
    }
    setImage(null);
  };

  const selectMockImage = (setImage, currentImage) => (image) => {
    if (currentImage?.isLocal) {
      URL.revokeObjectURL(currentImage.url);
    }
    setImage(image);
  };

  return(
    <>
      <main
        className="w-full min-h-screen flex flex-col justify-center items-center"
      >
        <section  className="w-full h-full flex flex-col border rounded-xl p-8 gap-6 bg-white">
          <header
            className="flex flex-col gap-6 w-full h-fit"
          >
            <span className="space-y-1">
              <h1
                className="text-lg font-medium text-black"
              >
                Theme
              </h1>

              <p className="text-xs text-gray-600">Choose your prefered style.</p>
            </span>

            <div className="flex gap-4">
        
              {/* Light Mode */}
              <div
                onClick={() => setSelected("light")}
                className={`w-60 rounded-xl p-4 cursor-pointer border-2 transition-all
                  ${
                    selected === "light"
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                <div className="h-30 bg-gray-100 rounded-lg mb-3"></div>

                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-4 h-4 flex items-center justify-center rounded-full text-[10px]
                      ${
                        selected === "light"
                          ? "bg-blue-500 text-white"
                          : "border"
                      }`}
                  >
                    {selected === "light" && "✓"}
                  </div>
                  <span className="text-gray-800 font-medium">Light Mode</span>
                </div>
              </div>

              {/* Dark Mode */}
              <div
                onClick={() => setSelected("dark")}
                className={`w-60 rounded-xl p-4 cursor-pointer border-2 transition-all
                  ${
                    selected === "dark"
                      ? "border-blue-500"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                <div className="h-30 bg-gray-800 rounded-lg mb-3"></div>

                <div className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-4 h-4 flex items-center justify-center rounded-full text-[10px]
                      ${
                        selected === "dark"
                          ? "bg-blue-500 text-white"
                          : "border"
                      }`}
                  >
                    {selected === "dark" && "✓"}
                  </div>
                  <span className="text-gray-800 font-medium">Dark Mode</span>
                </div>
              </div>

            </div>
            <span className="w-full border-t border-gray-300 block mt-4"></span>
          </header>

          {/* Hero Section */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-4 flex items-center justify-between">
              <span className="space-y-1">
                <h1 className="text-lg font-medium text-black">
                  Hero Section Image
                </h1>
                <p className="text-xs text-gray-600">Change the hero section background photo.</p>
              </span>

              <button
                className="px-4 py-2 text-sm font-medium rounded-md bg-blue-700 text-white hover:opacity-90 active:opacity-80 cursor-pointer"
                onClick={() => {
                          sileo.info({
                            title: "Confirm",
                            description: "Are you sure you want to post this?",
                            autopilot: {
                              expand: 100,
                              collapse: 7000,
                            },
                            button: {
                              title: "Post",
                              onClick: () => console.log("Logged out")
                            }
                          });
                        }}
              >
                Post
              </button>
            </div>

            {/* Two Column Layout */}
            <div className="flex gap-4">
              {/* Left Side - Drag & Drop Area */}
              <div className="w-2/5">
                <div
                  className={`
                    relative flex flex-col justify-center items-center border-2 border-dashed rounded-lg p-6 transition-all duration-200
                    ${isDraggingHero 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                    }
                    cursor-pointer
                  `}
                  style={{ minHeight: '256px' }}
                  onDragOver={handleDragOver(setIsDraggingHero)}
                  onDragLeave={handleDragLeave(setIsDraggingHero)}
                  onDrop={handleDrop(setIsDraggingHero, setHeroImage)}
                  onClick={() => heroFileInputRef.current?.click()}
                >
                  <input
                    ref={heroFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect(setHeroImage)}
                  />
                  
                  <div className="flex flex-col items-center justify-center text-center">
                    <svg 
                      className={`w-10 h-10 mb-3 ${isDraggingHero ? 'text-blue-500' : 'text-gray-400'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                    
                    <p className="text-sm font-medium text-gray-700">
                      {isDraggingHero ? 'Drop your image here' : 'Drag & drop your image here'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      or click to browse
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Supports: JPG, PNG, WebP
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Current Hero Photo Preview */}
              <div className="w-3/5">
                <div className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  {heroImage ? (
                    <>
                      <img 
                        src={heroImage.url} 
                        alt="Hero background"
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={removeImage(setHeroImage, heroImage)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        title="Remove image"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <p className="text-white text-xs truncate">
                          {heroImage.name || 'Hero Image'}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 bg-gray-50">
                      <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500">No image selected</p>
                      <p className="text-xs text-gray-400 mt-1">Drop an image to upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Fixed border - added margin top for spacing and block display */}
            <div className="mt-6">
              <hr className="border-t border-gray-300" />
            </div>
          </div>

          {/* Authentication Image Section */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-4 flex items-center justify-between">
              <span className="space-y-1">
                <h1 className="text-lg font-medium text-black">
                  Authentication Image
                </h1>
                <p className="text-xs text-gray-600">Change the authentication background photo.</p>
              </span>

              <button
                className="px-4 py-2 text-sm font-medium rounded-md bg-blue-700 text-white hover:opacity-90 active:opacity-80 cursor-pointer"
                onClick={() => {
                          sileo.info({
                            title: "Confirm",
                            description: "Are you sure you want to post this?",
                            autopilot: {
                              expand: 100,
                              collapse: 7000,
                            },
                            button: {
                              title: "Post",
                              onClick: () => console.log("Logged out")
                            }
                          });
                        }}
              >
                Post
              </button>
            </div>

            {/* Two Column Layout for Authentication */}
            <div className="flex gap-4">
              {/* Left Side - Drag & Drop Area */}
              <div className="w-2/5">
                <div
                  className={`
                    relative flex flex-col justify-center items-center border-2 border-dashed rounded-lg p-6 transition-all duration-200
                    ${isDraggingAuth 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                    }
                    cursor-pointer
                  `}
                  style={{ minHeight: '256px' }}
                  onDragOver={handleDragOver(setIsDraggingAuth)}
                  onDragLeave={handleDragLeave(setIsDraggingAuth)}
                  onDrop={handleDrop(setIsDraggingAuth, setAuthImage)}
                  onClick={() => authFileInputRef.current?.click()}
                >
                  <input
                    ref={authFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect(setAuthImage)}
                  />
                  
                  <div className="flex flex-col items-center justify-center text-center">
                    <svg 
                      className={`w-10 h-10 mb-3 ${isDraggingAuth ? 'text-blue-500' : 'text-gray-400'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                      />
                    </svg>
                    
                    <p className="text-sm font-medium text-gray-700">
                      {isDraggingAuth ? 'Drop your image here' : 'Drag & drop your image here'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      or click to browse
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Supports: JPG, PNG, WebP
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Current Auth Photo Preview */}
              <div className="w-3/5">
                <div className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  {authImage ? (
                    <>
                      <img 
                        src={authImage.url} 
                        alt="Authentication background"
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={removeImage(setAuthImage, authImage)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        title="Remove image"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <p className="text-white text-xs truncate">
                          {authImage.name || 'Authentication Image'}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 bg-gray-50">
                      <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500">No image selected</p>
                      <p className="text-xs text-gray-400 mt-1">Drop an image to upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminSettingsDisplay;