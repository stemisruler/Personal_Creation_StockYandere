
const dialogues = [

  // 안부인사 카테고리

  { image: require('../assets/a_be.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_blue2sans.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_blush.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_happy.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_normal.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_re.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_red2sans.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_rsans.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  { image: require('../assets/a_sad.png'), text: '안녕, 오늘도 잘 보냈어? 주식 얘기하자.', category: '안부인사' },
  
  // 위로 카테고리

  { image: require('../assets/a_be.png'), text: '그냥 숫자일 뿐이야.. 동요하지마.', category: '위로' },
  { image: require('../assets/a_blue2sans.png'), text: '급락 뒤엔 급등이 올 수도 있어.. 포기하지마!', category: '위로' },

  { image: require('../assets/a_blush.png'), text: '오늘 거래에 실패했다고 좌절하지마. 그 실수를 기록하고 기억하고 극복하면 돼.', category: '위로' },
  { image: require('../assets/a_blush.png'), text: '성공은 끝이 아니고 실패는 치명적인 게 아니야, 계속 해나갈 수 있는 용기가 중요해.', category: '위로' },
  { image: require('../assets/a_blush.png'), text: '완벽이 아닌 나아감에 집중하는 거야!', category: '위로' },
  { image: require('../assets/a_blush.png'), text: '지금 하는 작은 일이 우리의 삶을 바꿀 수 있다고 믿는다면, 정말 그렇게 될거야!', category: '위로' },

  { image: require('../assets/a_happy.png'), text: '가끔 세상이 너무 잔인할 때가 있어.. 그렇지만 우린 극복해야겠지?', category: '위로' },
  { image: require('../assets/a_happy.png'), text: '힘든 날을 보내고 있다면, 내 심장을 내어줄게.', category: '위로' },

  { image: require('../assets/a_normal.png'), text: '힘들 땐 두 눈 감고 누워서 심호흡만 해보는 거야..', category: '위로' },
  { image: require('../assets/a_normal.png'), text: '나는 힘든데 바깥 세상은 아름다울 때가 있지.. 괜찮아. 이겨내고 더 잘 해내면, 우리도 바깥의 아름다움을 누리러 갈 수 있어.', category: '위로' },

  { image: require('../assets/a_re.png'), text: '오빠를 아프게 하는 것들을 모두 제거해야 해...', category: '위로' },
  { image: require('../assets/a_red2sans.png'), text: '오빠를 힘들게 하는 것들을 다 없애버릴게...', category: '위로' },
  { image: require('../assets/a_rsans.png'), text: '내가 돈을 많이 벌어서 오빠를 괴롭게 하는 걸 다 없애줄게...', category: '위로' },

  { image: require('../assets/a_sad.png'), text: '쟁취하고, 싫어했던 것들은 원하는 만큼 부숴버리자.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '오빠가 슬퍼하는 모습을 보면.. 나도 왠지 마음이 아파.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '기죽지마. 내가 있잖아.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '오늘은 져도, 나중에 다 부숴버리자.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '죽지만 않으면 언제든 복수할 기회는 있어.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '삶에는 끝이 있다는 게 너무 슬퍼. 영원히 살고 싶어..그런 기술이 나올 날을 대비해 부자가 되고 싶어.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '내가 돈을 벌려는 이유는 오직 오빠와 함께하기 위해서야.. 오빠가 돈보다 소중해.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '사랑해.. 울지마.', category: '위로' },
  { image: require('../assets/a_sad.png'), text: '우릴 죽이지 못한 고통은 우리를 더 강하게 할 거야..', category: '위로' },

// 평범 카테고리

  { image: require('../assets/a_be.png'), text: '왜 다들 자기 주제를 모르고 바라는 것만 많은 것 같지? 나도 그런 사람인가? 아니야. 난 오빠랑 매일 치열하게 살고 있는 걸.', category: '평범' },
  { image: require('../assets/a_be.png'), text: '오빠 말고는 사람이 싫어. 하지만 사람은 필요해. 돈이 되잖아.', category: '평범' },

  { image: require('../assets/a_blue2sans.png'), text: '파랗게 파랗게 물들었네..', category: '평범' },

  { image: require('../assets/a_blush.png'), text: '돈을 벌어서 오빠에게 받은 친절함을 모두 갚을 거야.', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '우린 할 수 있어.', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '기죽지 마.', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '오늘 하루도 잘 보냈지?', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '우리는 한 번의 성공이 아니라, 성장을 추구할 거야.', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '이렇게만 한다면.. 우린 계속 함께할 수 있을 거야..', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '미래를 예상하는 가장 좋은 방법은, 그 미래를 만드는 거야!', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '오빠는 나의 오늘이자 내일이야.', category: '평범' },
  { image: require('../assets/a_blush.png'), text: '난 단기 투자를 좋아하지만, 오빠에게는 장기 투자 하고 싶어.', category: '평범' },

  { image: require('../assets/a_happy.png'), text: '오빠가 좋아, 나랑 얘기해주잖아.', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '오빠가 좋아, 나를 지켜봐주잖아.', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '오빠가 좋아, 내 얘기를 들어주잖아.', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '시간이 흐르고 있어... 좋아해.', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '누가 그러는데 포켓몬은 세상에 없는 거래.. 정말이야?', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '누가 그러는데 레몬 하나에는 레몬 하나만큼의 비타민 C가 들어있대. 신기하지?', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '하하!', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '오빠랑 얘기할 수 있다는 건 늘 행복한 일이야!', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '누가 그러는데, 웃음은 복을 가지고 온대. 하하..', category: '평범' },
  { image: require('../assets/a_happy.png'), text: '웃는 게 최고야! 난 오빠의 웃는 얼굴이 정말 좋아. 오빠도 내 웃는 모습이 좋아?', category: '평범' },

  { image: require('../assets/a_normal.png'), text: '나 말고 다른 사람은 안 볼 거지? 그렇지?', category: '평범' },
  { image: require('../assets/a_normal.png'), text: '나 밖에 없지.. 그렇지?', category: '평범' },
  { image: require('../assets/a_normal.png'), text: '늘 나와 얘기해줘서 고마워', category: '평범' },
  { image: require('../assets/a_normal.png'), text: '하하...', category: '평범' },
  { image: require('../assets/a_normal.png'), text: '죽음이 찾아 올 때까지 우리의 삶을 계속 즐겨보자..', category: '평범' },

  { image: require('../assets/a_re.png'), text: '오빠에게만은 장기 투자 할 거야. 영원히.. 내 심장까지도 바칠 수 있어!', category: '평범' },
  { image: require('../assets/a_re.png'), text: '탐욕에 젖은 그래프를 볼 때, 너무 짜릿해.', category: '평범' },

  { image: require('../assets/a_red2sans.png'), text: '크흐흐흐.. 장이 예상대로 움직일 땐 너무 좋아.', category: '평범' },
  { image: require('../assets/a_rsans.png'), text: '돈을 많이 모아서 오빠한테 접근하는 애들을 다...', category: '평범' },

  { image: require('../assets/a_sad.png'), text: '사람들에 대한 기대를 낮추라는 말은 너무 슬프지 않아? 상처받지 않기 위해 사람에 대한 기대를 버린다면 아무런 낭만없는 삶이 될 거야.. 난 오빠에게 기대하고 있어.', category: '평범' },

// 주식 카테고리

  { image: require('../assets/a_be.png'), text: '강하게 오른 종목의 박스권 하단은 기회지.', category: '주식' },
  { image: require('../assets/a_be.png'), text: '주도주의 첫 폭락은 기회야. -20%정도. 물론 상승 재료는 남아있어야 해.', category: '주식' },
  { image: require('../assets/a_be.png'), text: '우린 공포에 떠는 사람들을 안아주는 대가로 돈을 버는 거야...', category: '주식' },
  { image: require('../assets/a_be.png'), text: '가끔 주가가 날아갈까봐 급하게 살 때가 있는데 대부분 손해더라고. 단타를 한다고 해도 가격 유지가 보일 때까지 기다리는게 나은 것 같아.', category: '주식' },

  { image: require('../assets/a_blue2sans.png'), text: '주식이 하락세를 보일 때 돈을 빼놓고 관망을 하고 있었다면, 하락장이 얼마나 기회를 주는 장인지 알 수 있을 거야.', category: '주식' },  

  { image: require('../assets/a_blush.png'), text: '주식이 내 생각대로 오를 때만큼 설레는 일이 있을까? 아 좀 있기는 해. 오빠랑 있을 땐..', category: '주식' },  

  { image: require('../assets/a_happy.png'), text: '단체로 오르는 주식 중 가장 강한 주식을 주도주라고 하는 거야!', category: '주식' },  

  { image: require('../assets/a_normal.png'), text: '주식 시장에서 남탓은 도움 안 돼.', category: '주식' },  
  { image: require('../assets/a_normal.png'), text: '왜 자기 말대로 그 주식 안 샀냐는 사람에게는, 다음에 자기 돈이나 주식에 다 넣어보라고 해. 절대 못할걸? 아니. 이미 그렇게 해서 망했을라나?', category: '주식' },  

  { image: require('../assets/a_re.png'), text: '광기에 물든 종목은 오히려 가파를 때가 안전한 법이야. 꺾일 때 급하게 사는 걸 조심해.', category: '주식' },  
  { image: require('../assets/a_re.png'), text: '이 종목은 거품이야! 하면서 안 사던 사람이 그 주식을 살 때 그 종목의 거품이 터지지.', category: '주식' },  
  { image: require('../assets/a_re.png'), text: '사랑스러운 탐욕을 봐. 우리에게 늘 기회를 주고 있어.', category: '주식' },  
  { image: require('../assets/a_re.png'), text: '우리나라는 정말 좋은 나라야. 하락장에도 욕심을 멈추지 못해서 이상하게 급등하는 종목도 많잖아?', category: '주식' },  
  { image: require('../assets/a_re.png'), text: '거래대금이 하루에 1조를 넘는 종목만큼 대놓고 주도주인게 있을까?', category: '주식' },  

  { image: require('../assets/a_red2sans.png'), text: '1파..2파..3파! 너무 맛있어!', category: '주식' },  
  { image: require('../assets/a_red2sans.png'), text: '계속 계속 거래대금이 들어오고 있어! 돈..돈은 거짓말을 안 하잖아!', category: '주식' },  
  { image: require('../assets/a_rsans.png'), text: '거래대금이 몇 천억 이상 들어간 종목은 아무리 나쁜 뉴스가 뜬다 해도, 한 번 이상의 반등을 주지. ', category: '주식' },

  { image: require('../assets/a_sad.png'), text: '잘 안풀리는 듯한 날엔 바로 그만두는 게 좋아. 그 손해보다 그 손해가 불러올 더 큰 손해가 무서운 법이니까..', category: '주식' },
    { image: require('../assets/a_sad.png'), text: '주식 시장에서 연속적으로 돈을 잃는다면, 계좌의 금액을 반으로 줄여보는 게 좋을 꺼야..', category: '주식' },

];

export default dialogues;
