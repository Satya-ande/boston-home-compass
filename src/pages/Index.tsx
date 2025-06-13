
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Calculator, TrendingUp, MapPin, DollarSign, Building } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    crim: '',
    zn: '',
    indus: '',
    chas: '0',
    nox: '',
    rm: '',
    age: '',
    dis: '',
    rad: '',
    tax: '',
    ptratio: '',
    b: '',
    lstat: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call for now
    setTimeout(() => {
      const randomPrice = (Math.random() * 50 + 10).toFixed(2);
      setPrediction(randomPrice);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-amber-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Boston Home Compass</h1>
                <p className="text-sm text-gray-600">AI-Powered Price Predictions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#predict" className="text-gray-700 hover:text-blue-600 transition-colors">Predict</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Predict Boston
              <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent"> House Prices</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get accurate house price predictions using advanced machine learning. 
              Input property characteristics and receive instant valuations based on Boston market data.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 text-gray-700">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>ML-Powered Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Boston Market Data</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Calculator className="h-5 w-5 text-amber-600" />
                <span>Instant Predictions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="predict" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                  Property Details
                </CardTitle>
                <p className="text-gray-600">
                  Enter the property characteristics to get an accurate price prediction
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Crime Rate */}
                    <div className="space-y-2">
                      <Label htmlFor="crim" className="text-sm font-semibold text-gray-700">
                        Crime Rate
                      </Label>
                      <Input
                        id="crim"
                        name="crim"
                        type="number"
                        step="0.01"
                        placeholder="0.00632"
                        value={formData.crim}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Per capita crime rate by town</p>
                    </div>

                    {/* Residential Land Zoned */}
                    <div className="space-y-2">
                      <Label htmlFor="zn" className="text-sm font-semibold text-gray-700">
                        Residential Zoning
                      </Label>
                      <Input
                        id="zn"
                        name="zn"
                        type="number"
                        step="0.1"
                        placeholder="18.0"
                        value={formData.zn}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">% of residential land zoned for lots over 25,000 sq.ft.</p>
                    </div>

                    {/* Industrial Business */}
                    <div className="space-y-2">
                      <Label htmlFor="indus" className="text-sm font-semibold text-gray-700">
                        Industrial Area
                      </Label>
                      <Input
                        id="indus"
                        name="indus"
                        type="number"
                        step="0.01"
                        placeholder="2.31"
                        value={formData.indus}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">% of non-retail business acres per town</p>
                    </div>

                    {/* Charles River */}
                    <div className="space-y-2">
                      <Label htmlFor="chas" className="text-sm font-semibold text-gray-700">
                        Charles River
                      </Label>
                      <select
                        id="chas"
                        name="chas"
                        value={formData.chas}
                        onChange={handleInputChange}
                        className="h-12 w-full px-3 py-2 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
                        required
                      >
                        <option value="0">Not on river</option>
                        <option value="1">On Charles River</option>
                      </select>
                      <p className="text-xs text-gray-500">Property bounds Charles River</p>
                    </div>

                    {/* NOX Concentration */}
                    <div className="space-y-2">
                      <Label htmlFor="nox" className="text-sm font-semibold text-gray-700">
                        NOX Concentration
                      </Label>
                      <Input
                        id="nox"
                        name="nox"
                        type="number"
                        step="0.001"
                        placeholder="0.538"
                        value={formData.nox}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Nitric oxides concentration (parts per 10 million)</p>
                    </div>

                    {/* Average Rooms */}
                    <div className="space-y-2">
                      <Label htmlFor="rm" className="text-sm font-semibold text-gray-700">
                        Average Rooms
                      </Label>
                      <Input
                        id="rm"
                        name="rm"
                        type="number"
                        step="0.1"
                        placeholder="6.575"
                        value={formData.rm}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Average number of rooms per dwelling</p>
                    </div>

                    {/* Age of Building */}
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-sm font-semibold text-gray-700">
                        Building Age
                      </Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        step="0.1"
                        placeholder="65.2"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">% of owner-occupied units built prior to 1940</p>
                    </div>

                    {/* Distance to Employment Centers */}
                    <div className="space-y-2">
                      <Label htmlFor="dis" className="text-sm font-semibold text-gray-700">
                        Distance to Employment
                      </Label>
                      <Input
                        id="dis"
                        name="dis"
                        type="number"
                        step="0.1"
                        placeholder="4.0900"
                        value={formData.dis}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Weighted distances to employment centers</p>
                    </div>

                    {/* Accessibility Index */}
                    <div className="space-y-2">
                      <Label htmlFor="rad" className="text-sm font-semibold text-gray-700">
                        Highway Accessibility
                      </Label>
                      <Input
                        id="rad"
                        name="rad"
                        type="number"
                        placeholder="1"
                        value={formData.rad}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Index of accessibility to radial highways</p>
                    </div>

                    {/* Property Tax Rate */}
                    <div className="space-y-2">
                      <Label htmlFor="tax" className="text-sm font-semibold text-gray-700">
                        Property Tax Rate
                      </Label>
                      <Input
                        id="tax"
                        name="tax"
                        type="number"
                        placeholder="296"
                        value={formData.tax}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Full-value property-tax rate per $10,000</p>
                    </div>

                    {/* Pupil-Teacher Ratio */}
                    <div className="space-y-2">
                      <Label htmlFor="ptratio" className="text-sm font-semibold text-gray-700">
                        Pupil-Teacher Ratio
                      </Label>
                      <Input
                        id="ptratio"
                        name="ptratio"
                        type="number"
                        step="0.1"
                        placeholder="15.3"
                        value={formData.ptratio}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Pupil-teacher ratio by town</p>
                    </div>

                    {/* Black Population Proportion */}
                    <div className="space-y-2">
                      <Label htmlFor="b" className="text-sm font-semibold text-gray-700">
                        B Value
                      </Label>
                      <Input
                        id="b"
                        name="b"
                        type="number"
                        step="0.01"
                        placeholder="396.90"
                        value={formData.b}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">Demographic factor</p>
                    </div>

                    {/* Lower Status Population */}
                    <div className="space-y-2">
                      <Label htmlFor="lstat" className="text-sm font-semibold text-gray-700">
                        Lower Status %
                      </Label>
                      <Input
                        id="lstat"
                        name="lstat"
                        type="number"
                        step="0.01"
                        placeholder="4.98"
                        value={formData.lstat}
                        onChange={handleInputChange}
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <p className="text-xs text-gray-500">% lower status of the population</p>
                    </div>
                  </div>

                  <div className="flex justify-center pt-8">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Predicting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Calculator className="h-5 w-5" />
                          <span>Predict Price</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </form>

                {prediction && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                          <DollarSign className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Predicted Price</h3>
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        ${prediction}k
                      </div>
                      <p className="text-gray-600 mt-2">
                        Based on the provided property characteristics
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Predictions?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our machine learning model uses comprehensive Boston housing data to deliver accurate predictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">High Accuracy</h4>
              <p className="text-gray-600">Advanced ML algorithms trained on comprehensive Boston market data</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Comprehensive Features</h4>
              <p className="text-gray-600">Considers 13 key property and neighborhood characteristics</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Results</h4>
              <p className="text-gray-600">Get immediate price predictions with detailed explanations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-amber-600 p-2 rounded-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Boston Home Compass</h4>
                  <p className="text-gray-400">AI-Powered Price Predictions</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Leveraging machine learning to provide accurate Boston house price predictions. 
                Make informed real estate decisions with data-driven insights.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Features</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Price Predictions</li>
                <li>Market Analysis</li>
                <li>Property Insights</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">About</h5>
              <ul className="space-y-2 text-gray-400">
                <li>How It Works</li>
                <li>Methodology</li>
                <li>Data Sources</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Boston Home Compass. Built with machine learning for accurate predictions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
