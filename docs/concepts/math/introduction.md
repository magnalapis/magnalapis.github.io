---
id: introduction
sidebar_position: 0
---

# Concept: Math

머신 러닝을 이해하기 위해 필수적인 수학 지식을 기록한다.

Linear Algebra, Statistics, Information Theory 그리고 Calculus, 4가지 분야로 나누었으며 아래에 각 분야에 대한 overview 를 소개한다.

## Linear Algebra

> 머신 러닝에서 **객체를 서술**하는 수학적 표현.

머신 러닝에서는 데이터와 변수를 어떻게 표현하는가?

머신 러닝에서 다루는 고차원의 데이터는 **vector**로 표현된다. 대형 데이터와 모델의 parameter 들은 **matrix** 형태로 기술한다. 당연히 matrix 의 특성과 연산에 대한 수학적 지식이 중요하다.  

## Statistics

> 머신 러닝에서 **현상과 모델을 서술** 하는 수학적 표현.

머신 러닝에서 모델은 무엇을 학습하는가?

머신 러닝은 목적은 현상의 패턴을 잘 파악하는 것이다. 이 때 현상의 패턴을 확률 분포의 형태로 표현하는데, 이를 **모델링**한다고 한다. 

그리고 머신 러닝 모델 역시 이러한 현상의 확률 분포를 근사하고있으므로 모델 역시 확률 분포의 형태로 표현한다.

## Information Theory

> 머신 러닝을 **해석**하기 위한 수학적 도구.

모델이 표현하는 확률 분포는 어떤 의미를 가지는가?

Information Theory 는 정보가 학습과정에서 얼마나 손실되며, 학습된 확률 분포의 정보가 얼마나 유의미한지 정량화한다. 이로부터 우리는 보다 정확하게 데이터와 모델을 해석할 수 있다.

## Calculus

> 모든 수학의 **기본**이 되는 미적분학.

머신 러닝 모델의 이해뿐만 아니라, 상기한 수학 분야들에 대한 깊은 이해를 위해서는 미적분학에 대한 기본적인 이해가 필수적이다.

다만 end-user 일수록 미적분학의 필요성이 떨어지므로 아래쪽에 배치했다.
