import type { Metadata } from 'next';
import ProjectDetailPage from '@/components/ProjectDetailPage';
import type { ProjectDetails } from '@/components/ProjectDetailPage';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Stock Market Price Prediction | Hashir Bin Zahid',
  description: 'Machine learning model for predicting stock prices. Built with Python, TensorFlow, Keras, and Pandas.',
};

const details: ProjectDetails = {
  description: 'This research-driven project focused on developing a high-precision stock prediction system for NVIDIA (NVDA) using advanced deep learning techniques. ' +
    'By engineering a "Stacked" ensemble model that combines CNNs, LSTMs, and GRUs, the system effectively handles financial market volatility to  ' +
    'forecast short-term price fluctuations and directional trends with superior accuracy compared to traditional baseline models.',
  links: [
    { label: 'Poster', url: '/resources/certs/Group18_poster.pdf', type: 'internal' },
    { label: 'Report', url: '/resources/certs/Group18_report.pdf', type: 'internal' },
    { label: 'Source Code', url: 'https://colab.research.google.com/drive/1-pcbDXo3ousrf4HtgHpnQ99KWcmRuyDk?usp=sharing', type: 'external' },
  ],
  sections: [
    {
      title: 'Key Features',
      type: 'list',
      content: [
        'Stacked Ensemble Architecture: Aggregates predictions from multiple deep learning models (CNN, LSTM, GRU) to minimize variance and error.',
        'High Directional Accuracy: Achieved ~55.5% accuracy in predicting whether the market will move up or down.',
        'Advanced Feature Engineering: Utilizes 60-day rolling window sequences and weighted importance for Volume, High, and Low data.',
        'Volatility Adaptation: Hybrid architectures designed specifically to capture non-linear patterns in dynamic financial environments.',
        'Real-Time Visualization: Generates dynamic graphs for training loss, mean absolute error (MAE), and price tracking comparisons.',
      ],
    },
    {
      title: 'Technical Implementation',
      type: 'text',
      content: 'The core system relies on a meta-learner approach where a "Stacked" model takes the outputs of various sub-models as input features to generate a final prediction. ' +
        'The implementation involves a rigorous data pipeline: fetching historical data via APIs, normalizing it with MinMax scaling, and restructuring it into time-series sequences. ' +
        'A custom directional bias adjustment algorithm was implemented to refine the final output based on detected trend changes.',
    },
    {
      title: 'Development Process',
      type: 'text',
      content: 'Developed within an academic research setting, this project involved iterative testing of distinct architectures, evolving from simple RNNs to complex hybrid systems. ' +
        'The development cycle focused on optimizing hyperparameters using techniques like early stopping and learning rate reduction to prevent overfitting. ' +
        'The final model was validated against a held-out test set from November 2024, achieving the lowest Mean Squared Error (11.64) among all tested methods.',
    },
  ],
  images: [
    { src: '/resources/images/stock-market-01.jpeg', alt: 'Poster', caption: 'Poster for the AI Competition' },
    { src: '/resources/images/stock-market-02.jpeg', alt: 'Metrics for different models', caption: 'Metrics for different models' },
    { src: '/resources/images/stock-market-03.png', alt: 'Price Prediction', caption: 'Shows the prices of all models compared with actual prices' },
    { src: '/resources/images/stock-market-04.jpeg', alt: 'Price Chart', caption: 'Predicted Price vs. Actual Price' },
    { src: '/resources/images/stock-market-05.jpeg', alt: 'Price Direction Chart', caption: 'Predicted Direction vs. Actual Price' },
    { src: '/resources/images/stock-market-06.png', alt: 'Metrics Chart', caption: 'Chart with different metrics for all the tested models' },
  ],
};

export default function Page() {
  const project = projects.find(p => p.slug === 'stock-market-price-prediction');
  return <ProjectDetailPage project={project} details={details} />;
}

