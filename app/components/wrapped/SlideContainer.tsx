'use client';

import { useState, useEffect } from 'react';
import { WrappedData } from '@/types/wrapped';
import { TOTAL_SLIDES, TRANSITION_DURATION } from '@/lib/wrapped/constants';
import NavigationButtons from './NavigationButtons';
import ProgressIndicator from './ProgressIndicator';
import WelcomeSlide from './slides/WelcomeSlide';
import PersonaSlide from './slides/PersonaSlide';
import ReplyGuySlide from './slides/ReplyGuySlide';
import TwitterRankSlide from './slides/TwitterRankSlide';
import SummarySlide from './slides/SummarySlide';

interface SlideContainerProps {
  data: WrappedData;
}

export default function SlideContainer({ data }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  const transitionToSlide = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= TOTAL_SLIDES) return;

    setFadeState('out');
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFadeState('in');
    }, TRANSITION_DURATION);
  };

  const goToNext = () => transitionToSlide(currentSlide + 1);
  const goToPrev = () => transitionToSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <WelcomeSlide data={data} />;
      case 1:
        return <PersonaSlide data={data} />;
      case 2:
        return <ReplyGuySlide data={data} />;
      case 3:
        return <TwitterRankSlide data={data} />;
      case 4:
        return <SummarySlide data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div
        className={`
          transition-opacity duration-300 ease-in-out
          ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {renderSlide()}
      </div>

      <ProgressIndicator current={currentSlide + 1} total={TOTAL_SLIDES} />

      <NavigationButtons
        onPrev={goToPrev}
        onNext={goToNext}
        canGoPrev={currentSlide > 0}
        canGoNext={currentSlide < TOTAL_SLIDES - 1}
      />
    </div>
  );
}
