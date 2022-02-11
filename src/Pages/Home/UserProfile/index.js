import Card from "../../../Components/Card";
import Heading from "../../../Components/Heading";
import Email from "../../../Components/Icons/Email";
import Phone from "../../../Components/Icons/Phone";
import Pin from "../../../Components/Icons/Pin";
import SocialMedia from "../../../Components/SocialMedia";
import Text from "../../../Components/Text";
import UserImage from "../../../Components/UserImage";

import "./styles.css";

function UserProfile() {
  return (
    <Card height="100%">
      <div className="user-profile-container">
        <div className="user-profile-container__left__user-image">
          <UserImage />
        </div>

        <div className="user-profile-container__left__content">
          <div>
            <Heading fontSize={28}>Bruno Alves Lucena</Heading>

            <Heading fontSize={20} fontWeight={400} color="#5DB9FA">
              Sênior, 10 anos de experiência
            </Heading>
          </div>

          <p>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur.
            </Text>
          </p>

          <div>
            <div className="user-info-container">
              <div className="user-info__item">
                <div className="user-info__item__icon">
                  <Pin size={11} />
                </div>

                <Text color="#ACACAC">Indaiatuba, SP - Brasil</Text>
              </div>

              <div className="user-info__item">
                <div className="user-info__item__icon">
                  <Email size={10} />
                </div>

                <Text color="#ACACAC">bruno@frontacademy.com.br</Text>
              </div>

              <div className="user-info__item">
                <div className="user-info__item__icon">
                  <Phone size={16} />
                </div>

                <Text color="#ACACAC">+55 11 99999-9999</Text>
              </div>
            </div>

            <SocialMedia />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserProfile;
